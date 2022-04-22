import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import UserInfo from '../src/components/userInfo'

const Home: NextPage = () => {
  return (
    <Layout>
      <UserInfo />
    </Layout>
  )
}

export default Home
