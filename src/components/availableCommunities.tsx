import { Box } from '@chakra-ui/layout'
import { useAvailableCommunitiesQuery } from '../../graphql/generated/graphql'
import CommunityCard from './communityCard'

export default function AvailableCommunities() {
  const { data } = useAvailableCommunitiesQuery({
    fetchPolicy: 'cache-and-network',
  })

  return (
    <>
      {data?.community.map((community) => (
        <Box key={community.id.toString()} my="3">
          <CommunityCard community={community} />
        </Box>
      ))}
    </>
  )
}
