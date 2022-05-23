import jwt from 'jsonwebtoken'

import type { NextApiRequest } from 'next'
import { envVars } from '../config/serverConfig'

// It authorize the request from the client to Next.js backend with verifying the JWT token
export function authorizeClientRequest(req: NextApiRequest) {
  if (!req.headers.authorization) {
    return false
  }

  const headerSplit = req.headers.authorization?.split(' ')

  if (headerSplit.length !== 2 || headerSplit[0] !== 'Bearer') {
    return false
  }

  const [, signedToken] = headerSplit

  try {
    const decodedToken = jwt.verify(signedToken, envVars.NEXTAUTH_SECRET)
    console.log(JSON.stringify(decodedToken))
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
