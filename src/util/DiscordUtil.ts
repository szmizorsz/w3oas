import type { APIGuild } from 'discord-api-types/v10'
import type { Guild } from 'next-auth'

export async function getGuildsFromDiscord(access_token: string) {
  const guildsResponse = await fetch(
    'https://discord.com/api/users/@me/guilds',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  const guildsData = (await guildsResponse.json()) as APIGuild[]

  if (!guildsData) return null

  const guilds = guildsData.map((guild) => {
    return {
      id: guild.id,
      name: guild.name,
      icon: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`,
      owner: guild.owner,
    }
  }) as Guild[]
  return guilds
}
