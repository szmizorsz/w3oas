import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3Provider } from '../src/util/Web3Provider'
import type { AppProps } from 'next/app'
import ApolloProviderWithAuth from '../src/util/ApolloProviderWithAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Web3Provider>
          <ApolloProviderWithAuth>
            <Component {...pageProps} />
          </ApolloProviderWithAuth>
        </Web3Provider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
