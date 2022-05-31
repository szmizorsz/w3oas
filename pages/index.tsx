import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import Description from '../src/components/home/description'
import Footer from '../src/components/home/footer'
import Technology from '../src/components/home/technology'

const Home: NextPage = () => {
  return (
    <Layout>
      <Description />
      <Technology />
      <Footer />
    </Layout>
  )
}

export default Home
