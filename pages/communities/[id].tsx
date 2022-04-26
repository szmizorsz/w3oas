import type { NextPage } from 'next'
import Layout from '../../src/components/layout'
import ApolloProviderWithAuth from '../../src/components/apolloProviderWithAuth'
import { useRouter } from 'next/router'
import CommunityDetail from '../../src/components/communityDetail'

const Communities: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>There is no id passed</p>

  return (
    <ApolloProviderWithAuth>
      <Layout>
        <CommunityDetail id={Number(id)} />
      </Layout>
    </ApolloProviderWithAuth>
  )
}

export default Communities
