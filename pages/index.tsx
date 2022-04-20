import type { NextPage } from 'next'
import Layout from '../components/layout'
import UserInfo from '../components/userInfo'

const Home: NextPage = () => {
  return (
    <Layout>
      <UserInfo />
    </Layout>
  )
}

export default Home
