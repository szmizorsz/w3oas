import { Box } from '@chakra-ui/layout'
import { useAvailableCommunitiesQuery } from '../../graphql/generated/graphql'
import CommunityCard from './communityCard'
import type { Guild } from 'next-auth'

interface Props {
  userId: number
  guilds: Array<Guild>
}

export default function AvailableCommunities({ userId, guilds }: Props) {
  const { data } = useAvailableCommunitiesQuery({
    variables: {
      user_id: userId,
    },
    fetchPolicy: 'cache-and-network',
  })

  const guildDiscordIds = guilds ? guilds.map((guild) => guild.id) : []

  const availableCommunities = data?.community.filter((community) =>
    guildDiscordIds.includes(community.discord_id)
  )

  return (
    <>
      {availableCommunities &&
        availableCommunities.map((community) => (
          <Box key={community.id.toString()} my="3">
            <CommunityCard community={community} />
          </Box>
        ))}
    </>
  )
}
