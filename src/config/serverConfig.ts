const {
  HASURA_GRAPHQL_ADMIN_SECRET,
  NEXT_PUBLIC_DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  NEXT_PUBLIC_GRAPHQL_URL,
  RELAYER_API_KEY,
  RELAYER_API_SECRET,
  COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS,
} = process.env

if (typeof HASURA_GRAPHQL_ADMIN_SECRET === 'undefined') {
  throw new Error('HASURA_GRAPHQL_ADMIN_SECRET is not configured!')
}

if (typeof NEXT_PUBLIC_DISCORD_CLIENT_ID === 'undefined') {
  throw new Error('NEXT_PUBLIC_DISCORD_CLIENT_ID is not configured!')
}

if (typeof DISCORD_CLIENT_SECRET === 'undefined') {
  throw new Error('DISCORD_CLIENT_SECRET is not configured!')
}

if (typeof NEXT_PUBLIC_GRAPHQL_URL === 'undefined') {
  throw new Error('NEXT_PUBLIC_GRAPHQL_URL is not configured!')
}

if (typeof RELAYER_API_KEY === 'undefined') {
  throw new Error('RELAYER_API_KEY is not configured!')
}

if (typeof RELAYER_API_SECRET === 'undefined') {
  throw new Error('RELAYER_API_SECRET is not configured!')
}

if (typeof COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS === 'undefined') {
  throw new Error('COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS is not configured!')
}

export const envVars = {
  HASURA_GRAPHQL_ADMIN_SECRET,
  NEXT_PUBLIC_DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  NEXT_PUBLIC_GRAPHQL_URL,
  RELAYER_API_KEY,
  RELAYER_API_SECRET,
  COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS,
}

export const hasuraRole = 'member'
