import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { upsertUserFromTokenInDB } from '../../../src/util/UserUtil'
import { hasuraRole } from '../../../src/config/serverConfig'
import jwt from 'jsonwebtoken'
import { getGuildsFromDiscord } from '../../../src/util/DiscordUtil'

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: { scope: 'identify email guilds guilds.members.read' },
      },
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async session({ session, token }) {
      session.userId = token.userId
      if (token.sub) {
        session.providerId = token.sub
      }
      // Encoded jwt is needed for the hasura authorization on the client side
      const encodedJwt = jwt.sign(token, process.env.NEXTAUTH_SECRET, {
        algorithm: 'HS256',
      })

      session.guilds = token.guilds
      session.encodedJwt = encodedJwt

      return session
    },

    async jwt({ token, account }) {
      // If the account is present that means this JWT callback was called after sign in
      // In later phases (when the clients gets the session so the JWT is updated) the account is not present
      // So we execute the following logic only on sign in
      if (account) {
        const uspertResult = await upsertUserFromTokenInDB(token)
        if (!uspertResult) {
          throw new Error('Could not upsert user in db!')
        }
        token.userId = uspertResult

        if (account.access_token) {
          const guilds = await getGuildsFromDiscord(account.access_token)
          if (guilds) {
            token.guilds = guilds
          }
        }

        // Claims needed for authorization in Hasura
        token['https://hasura.io/jwt/claims'] = {
          'x-hasura-allowed-roles': [hasuraRole],
          'x-hasura-default-role': hasuraRole,
          'x-hasura-role': hasuraRole,
          'x-hasura-user-id': uspertResult.toString(),
        }
      }

      return token
    },
  },
})
