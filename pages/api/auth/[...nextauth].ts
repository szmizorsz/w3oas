import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { upsertUserFromTokenInDB } from '../../../src/util/UserUtil'

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
    async jwt({ token, account }) {
      // If the account is present that means this JWT callback was called after sign in
      // In later phases (when the clients gets the session so the JWT is updated) the account is not present
      // So we execute the following logic only on sign in
      if (account) {
        const uspertResult = await upsertUserFromTokenInDB(token)
        if (!uspertResult) {
          throw new Error('Could not upsert user in db!')
        }
      }

      return token
    },
  },
})
