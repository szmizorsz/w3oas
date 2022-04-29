import { Box } from '@chakra-ui/layout'
import { useMyCommunitiesQuery } from '../../graphql/generated/graphql'
import CommunityCard from './communityCard'

interface Props {
  userId: number
}

export default function MyCommunities({ userId }: Props) {
  const { data } = useMyCommunitiesQuery({
    variables: {
      user_id: userId,
    },
    fetchPolicy: 'cache-and-network',
  })

  return (
    <>
      {data?.community &&
        data.community.map((community) => (
          <Box key={community.id.toString()} my="3">
            <CommunityCard community={community} />
          </Box>
        ))}
    </>
  )
}
