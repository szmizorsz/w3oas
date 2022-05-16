import * as React from 'react'
import { useSession } from 'next-auth/react'
import { Box, Text } from '@chakra-ui/react'

export default function UserInfo() {
  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  if (sessionLoading) return <p>Loading...</p>

  return (
    <>
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
