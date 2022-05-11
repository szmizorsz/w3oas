import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import type { CommunityNFT } from '../typechain'
import { CommunityNFT__factory } from '../typechain'

export default function useCommunityNftContract(
  signer?: ethers.providers.JsonRpcSigner
) {
  const [communityNftcontract, setCommunityNftContract] =
    useState<CommunityNFT | null>(null)

  useEffect(() => {
    ;(async () => {
      if (
        !process.env.NEXT_PUBLIC_GREETER_CONTRACT_ADDRESS ||
        !process.env.NEXT_PUBLIC_RPC_TARGET
      ) {
        return
      }

      const signerOrProvider =
        signer ||
        new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_TARGET)

      const contract = CommunityNFT__factory.connect(
        process.env.NEXT_PUBLIC_GREETER_CONTRACT_ADDRESS,
        signerOrProvider
      )

      setCommunityNftContract(contract)
    })()
  }, [signer])

  return communityNftcontract
}
