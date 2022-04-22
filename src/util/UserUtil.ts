import { getApolloClientWithAdminSecret } from './DBUtil'
import {
  UpsertUserDocument,
  UpsertUserMutation,
  UpsertUserMutationVariables,
} from '../../graphql/generated/graphql'

import type { JWT } from 'next-auth/jwt'

export async function upsertUserFromTokenInDB(token: JWT) {
  try {
    if (!token.sub) return null

    const client = getApolloClientWithAdminSecret()

    const { data } = await client.mutate<
      UpsertUserMutation,
      UpsertUserMutationVariables
    >({
      mutation: UpsertUserDocument,
      variables: {
        discord_id: token.sub,
        discord_user_name: token.name,
        discord_email: token.email,
        discord_avatar: token.picture,
      },
    })

    return data?.insert_user_one?.id
  } catch (error) {
    console.error(error)
  }
}
