import type { NextApiRequest, NextApiResponse } from 'next'
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from 'defender-relay-client/lib/ethers'
import { envVars } from '../../../src/config/serverConfig'
import { CommunityNFTFactory__factory } from '../../../src/typechain/factories/CommunityNFTFactory__factory'
import { setNftContractAddressByCommunityIdInDB } from '../../../src/util/CommunityUtil'
import { authorizeClientRequest } from '../../../src/util/AuthUtil'

export type CommunityNftDeploymentResponseData = {
  communityNFTContractAddress?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommunityNftDeploymentResponseData>
) {
  try {
    if (!authorizeClientRequest(req)) {
      res.status(500).send({ error: 'failed to authorize the request' })
    }

    const body = JSON.parse(req.body)
    const communityId = body.communityId as string
    const communityOwnerAddress = body.communityOwnerAddress as string
    const membershipNFTtokenURI = body.membershipNFTtokenURI as string

    console.log(
      `Community NFT contract deployment is initiated for community: ${communityId}`
    )

    const credentials = {
      apiKey: envVars.RELAYER_API_KEY,
      apiSecret: envVars.RELAYER_API_SECRET,
    }
    const provider = new DefenderRelayProvider(credentials)
    const signer = new DefenderRelaySigner(credentials, provider, {
      speed: 'average',
    })

    const communityNFTFactory = CommunityNFTFactory__factory.connect(
      envVars.NEXT_PUBLIC_COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS,
      signer
    )

    const tx = await communityNFTFactory.deployCommunityNFT(
      communityId,
      communityOwnerAddress,
      membershipNFTtokenURI
    )

    await tx.wait()

    const communityNFTContractAddress =
      await communityNFTFactory.getCommunityNftById(communityId)

    await setNftContractAddressByCommunityIdInDB(
      parseInt(communityId),
      communityNFTContractAddress
    )

    console.log(
      `Community NFT contract: ${communityNFTContractAddress} is deployed for community: ${communityId}`
    )

    return res.status(200).send({
      communityNFTContractAddress,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: 'failed to deploy contract' })
  }
}
