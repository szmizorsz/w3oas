import { Box } from '@chakra-ui/layout'
import { useAvailableCommunitiesQuery } from '../../graphql/generated/graphql'
import CommunityCard from './communityCard'

export default function AvailableCommunities() {
  const { data, loading } = useAvailableCommunitiesQuery()

  if (loading) return <p>Loading...</p>

  debugger

  return (
    <>
      {data?.community.map((community) => (
        <Box key={community.id.toString()} m="3">
          <CommunityCard community={community} />
        </Box>
      ))}
    </>
  )
}
