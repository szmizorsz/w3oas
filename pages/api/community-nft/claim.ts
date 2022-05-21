import type { NextApiRequest, NextApiResponse } from 'next'
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from 'defender-relay-client/lib/ethers'
import { envVars } from '../../../src/config/serverConfig'
import { CommunityNFT__factory } from '../../../src/typechain/factories/CommunityNFT__factory'

export type CommunityNftDeploymentResponseData = {
  result?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommunityNftDeploymentResponseData>
) {
  try {
    const body = JSON.parse(req.body)
    const communityNftContractAddress =
      body.communityNftContractAddress as string
    const address = body.address as string

    console.log(
      `Community membership NFT claiming is initiated for community contract: ${communityNftContractAddress} and address: ${address} `
    )

    const credentials = {
      apiKey: envVars.RELAYER_API_KEY,
      apiSecret: envVars.RELAYER_API_SECRET,
    }
    const provider = new DefenderRelayProvider(credentials)
    const signer = new DefenderRelaySigner(credentials, provider, {
      speed: 'average',
    })

    const communityNftcontract = CommunityNFT__factory.connect(
      communityNftContractAddress,
      signer
    )

    const tx = await communityNftcontract.mintMembershipNFT(address)

    await tx.wait()

    console.log(
      `Community membership NFT claiming is done for community contract: ${communityNftContractAddress} and address: ${address} `
    )

    return res.status(200).send({
      result: 'success',
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({ result: 'failed to perform claiming' })
  }
}