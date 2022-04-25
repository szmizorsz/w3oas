import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import UserInfo from '../src/components/userInfo'
import ApolloProviderWithAuth from '../src/components/apolloProviderWithAuth'

const Home: NextPage = () => {
  return (
    <ApolloProviderWithAuth>
      <Layout>
        <UserInfo />
      </Layout>
    </ApolloProviderWithAuth>
  )
}

export default Home
