import { useState } from 'react'
import {
  Box,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetUserByIdLazyQuery } from '../../graphql/generated/graphql'

interface Props {
  nftContractAddress: string | null | undefined
  encodedJwt: string | undefined
  loggedInUserId: number | undefined
}

export default function ClaimCommunityNftButton({
  loggedInUserId,
  nftContractAddress,
  encodedJwt,
}: Props) {
  const [connectWalletAlert, setConnectWalletAlert] = useState(false)
  const [getUserById] = useGetUserByIdLazyQuery()

  const handleCommunityMembershipNFTClaim = async () => {
    if (!loggedInUserId) return
    const result = await getUserById({
      variables: {
        id: loggedInUserId,
      },
    })
    if (!result.data?.user_by_pk?.wallet_address) {
      setConnectWalletAlert(true)
    }
    const fetchCommunityMembershipNftClaim = fetch('/api/community-nft/claim', {
      method: 'POST',
      headers: { authorization: encodedJwt ? `Bearer ${encodedJwt}` : '' },
      body: JSON.stringify({
        communityNftContractAddress: nftContractAddress,
        address: result.data?.user_by_pk?.wallet_address,
      }),
    })
    await toast.promise(fetchCommunityMembershipNftClaim, {
      pending: 'Claiming in progress',
      success: 'Successful claim 👌',
      error: 'Something went wrong 🤯',
    })
  }

  return (
    <>
      <Box my="6">
        <>
          <Button
            ml={5}
            variant="outlined"
            border="1px"
            onClick={handleCommunityMembershipNFTClaim}
          >
            Claim community membership NFT
          </Button>
          <ToastContainer />
        </>
        {connectWalletAlert && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>No wallet address specified!</AlertTitle>
            <AlertDescription>
              Please, create or connect yout wallet with - Connect Wallet -
              button!
            </AlertDescription>
          </Alert>
        )}
      </Box>
    </>
  )
}
