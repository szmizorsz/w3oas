import {useSession} from 'next-auth/react';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import type {Session} from 'next-auth';

interface ApolloProviderWithAuthProps {
  children: React.ReactNode
}

const memoryCache = new InMemoryCache();

export function getApolloClient (session?: Session | null) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: session ? `Bearer ${session.encodedJwt}` : ''
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: memoryCache
  });

  return client;
}

export default function ApolloProviderWithAuth ({
  children
}: ApolloProviderWithAuthProps) {
  const {data: session, status} = useSession();
  const sessionLoading = status === 'loading';

  if (sessionLoading) return <p>Loading...</p>;

  const client = getApolloClient(session);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
