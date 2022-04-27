import type { NextPage } from 'next'
import Layout from '../../src/components/layout'
import ApolloProviderWithAuth from '../../src/components/apolloProviderWithAuth'
import { useRouter } from 'next/router'
import NewCommunity from '../../src/components/newCommunity'

const NewCommunityPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>There is no id passed</p>

  return (
    <ApolloProviderWithAuth>
      <Layout>
        <NewCommunity id={id as string} />
      </Layout>
    </ApolloProviderWithAuth>
  )
}

export default NewCommunityPage
