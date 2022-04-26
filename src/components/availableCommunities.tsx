import { Box } from '@chakra-ui/layout'
import { useAvailableCommunitiesQuery } from '../../graphql/generated/graphql'
import CommunityCard from './communityCard'

export default function AvailableCommunities() {
  const { data, loading } = useAvailableCommunitiesQuery({
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'network-only', // We have to disable the apollo cache for this query
    // because the community deletion routes back to this page, so communities can not be served from the cache after a deletion
  })

  if (loading) return <p>Loading...</p>

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
