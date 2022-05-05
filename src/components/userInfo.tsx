import * as React from 'react'
import { useSession } from 'next-auth/react'
import { Box, Text } from '@chakra-ui/react'
import useGreeterContract from '../hooks/useGreeterContract'

export default function UserInfo() {
  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  const greeterContract = useGreeterContract()
  const [greeting, setGreeting] = React.useState('')

  React.useEffect(() => {
    async function getGreeting() {
      const greetingFromContract = await greeterContract?.greet()
      if (greetingFromContract) {
        setGreeting(greetingFromContract)
      }
    }
    getGreeting()
  }, [greeterContract])

  if (sessionLoading) return <p>Loading...</p>

  return (
    <>
      <h1>{greeting}</h1>
      <div>
        {session?.user && (
          <Box>
            <Text py="8">User information</Text>
            <Text>Name: {session.user.name}</Text>
            <Text>Email: {session.user.email}</Text>
            <Text>UserId: {session.userId}</Text>
          </Box>
        )}
      </div>
    </>
  )
}
