import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import type { CommunityNFT } from '../typechain'
import { CommunityNFT__factory } from '../typechain'

export default function useCommunityNftContract(
  address: string | null | undefined,
  signer?: ethers.providers.JsonRpcSigner
) {
  const [communityNftcontract, setCommunityNftContract] =
    useState<CommunityNFT | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!process.env.NEXT_PUBLIC_RPC_TARGET || !address) {
        return
      }

      const signerOrProvider =
        signer ||
        new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_TARGET)

      const contract = CommunityNFT__factory.connect(address, signerOrProvider)

      setCommunityNftContract(contract)
    })()
  }, [signer, address])

  return communityNftcontract
}
