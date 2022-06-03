import { Button, Box } from '@chakra-ui/react'
import { useWeb3 } from './Web3Provider'
import { useUpdateWalletForUserByIdMutation } from '../../graphql/generated/graphql'

interface Web3ButtonProps {
  userId: number
}

export default function Web3Button({ userId }: Web3ButtonProps) {
  const { web3Loading, web3Provider, connectWallet, disconnectWallet } =
    useWeb3()
  const [updateWallet] = useUpdateWalletForUserByIdMutation()

  if (web3Loading) return <p>Web3 loading...</p>

  const connectWalletAndSaveToDB = async () => {
    const accounts = await connectWallet()
    if (!userId) {
      throw Error('UserId is not defined in the session')
    }
    if (!accounts) {
      throw Error('Wallet address is not available')
    }
    updateWallet({
      variables: {
        user_id: userId,
        address: accounts[0],
      },
    })
  }

  return (
    <Box>
      {web3Provider ? (
        <Button
          colorScheme="blue"
          variant="solid"
          border="1px"
          onClick={disconnectWallet}
        >
          Disconnect Wallet
        </Button>
      ) : (
        <Button
          colorScheme="blue"
          variant="solid"
          border="1px"
          onClick={connectWalletAndSaveToDB}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  )
}
