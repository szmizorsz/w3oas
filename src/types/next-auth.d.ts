import 'next-auth/jwt'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

/** Extension of the built-in session types */
declare module 'next-auth' {
  interface Session {
    userId: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
    userId: number
  }
}
