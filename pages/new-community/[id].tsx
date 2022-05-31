import type { NextPage } from 'next'
import Layout from '../../src/components/layout'
import { useRouter } from 'next/router'
import NewCommunity from '../../src/components/community/newCommunity'

const NewCommunityPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>There is no id passed</p>

  return (
    <Layout>
      <NewCommunity id={id as string} />
    </Layout>
  )
}

export default NewCommunityPage
