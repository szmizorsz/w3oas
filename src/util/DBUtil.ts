import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { envVars } from '../config/serverConfig'

// This instantiates an apolloClient with admin rights. Only use for secured endpoints!
export function getApolloClientWithAdminSecret(): ApolloClient<NormalizedCacheObject> {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'X-Hasura-Admin-Secret': envVars.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}
