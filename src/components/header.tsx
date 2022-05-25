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
import Web3Button from './web3Button'

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
  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  if (sessionLoading) return <p>Session loading...</p>

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
              <Link href="/community" passHref>
                <ChakraLink>Community</ChakraLink>
              </Link>
            </Box>
            <Web3Button userId={session?.userId} />
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
