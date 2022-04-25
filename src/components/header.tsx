import { signIn, signOut, useSession } from 'next-auth/react'
import { Heading, Flex } from '@chakra-ui/layout'
import {
  Button,
  Box,
  Spacer,
  HStack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ADAPTER_EVENTS, CHAIN_NAMESPACES } from '@web3auth/base'
import type { Web3Auth, Web3AuthOptions } from '@web3auth/web3auth'
import { ethers } from 'ethers'
import { blockchainNetworkMetadata } from '../config/config'

const Avatar = styled.span`
  border-radius: 2rem;
  float: left;
  height: 2.8rem;
  width: 2.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
`

export default function Header() {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(
    null
  )
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null)

  useEffect(() => {
    const init = async () => {
      try {
        const web3AuthCtorParams = {
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID as string,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            rpcTarget: process.env.NEXT_PUBLIC_RPC_TARGET as string,
            ...blockchainNetworkMetadata[
              process.env.NEXT_PUBLIC_NETWORK as string
            ],
          },
        }

        const { Web3Auth } = await import('@web3auth/web3auth')
        const web3AuthInstance = new Web3Auth(
          web3AuthCtorParams as Web3AuthOptions
        )
        subscribeAuthEvents(web3AuthInstance)
        setWeb3AuthInstance(web3AuthInstance)
        await web3AuthInstance.initModal()
      } catch (error) {
        console.error(error)
      }
    }

    const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log('Yeah!, you are successfully logged in', data)
      })

      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log('connecting')
      })

      web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log('disconnected')
      })

      web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error('some error or user has cancelled login request', error)
      })
    }

    init()
  }, [])

  const login = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    const provider = await web3AuthInstance.connect()
    if (!provider) {
      console.log('web3provider not initialized')
      return
    }
    setProvider(new ethers.providers.Web3Provider(provider))
  }

  const getUserInfo = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    const user = await web3AuthInstance.getUserInfo()
    console.log('User info', user)
  }

  const logout = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    await web3AuthInstance.logout()
    setProvider(null)
  }

  const onGetAccounts = async () => {
    if (!provider) {
      console.log('provider not initialized yet')
      return
    }
    try {
      const accounts = await provider.listAccounts()
      console.log('User account', accounts)
    } catch (error: unknown) {
      console.error((error as Error).message)
      throw error
    }
  }

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={onGetAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>
    </>
  )

  const unloggedInView = (
    <button onClick={login} className="card">
      Login
    </button>
  )

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  if (sessionLoading) return <p>Loading...</p>

  return (
    <Flex
      justify="space-between"
      padding="1rem"
      color="white"
      background="gray.600"
    >
      <Box pl="10" py="2">
        <Link href="/" passHref>
          <ChakraLink>
            <Heading size="md">Web3 Onboarding As a Service</Heading>
          </ChakraLink>
        </Link>
      </Box>
      <Spacer />
      <Box pr="10">
        {session?.user && (
          <HStack spacing="45">
            <Box>
              <div>{provider ? loggedInView : unloggedInView}</div>
            </Box>
            <Box>
              <Avatar
                style={{ backgroundImage: `url(${session.user.image})` }}
              />
              <Text fontSize="sm">
                Signed in as {session.user.name || session.user.email}
              </Text>
            </Box>
            <Button
              colorScheme="blue"
              variant="solid"
              border="1px"
              onClick={(e) => {
                e.preventDefault()
                signOut({
                  callbackUrl: `${window.location.origin}`,
                })
              }}
            >
              Sign out
            </Button>
          </HStack>
        )}
        {!session && (
          <Button
            colorScheme="blue"
            variant="solid"
            border="1px"
            size="lg"
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign in
          </Button>
        )}
      </Box>
    </Flex>
  )
}
