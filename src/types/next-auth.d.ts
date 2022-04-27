import 'next-auth/jwt'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

/** Extension of the built-in session types */
declare module 'next-auth' {
  interface Session {
    userId: number
    providerId: string
    encodedJwt: string
    guilds: Guild[]
  }

  interface Guild {
    id: string
    name: string
    icon: string
    owner: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
    userId: number
    guilds: Guild[]
  }
}
