import type { NextPage } from 'next'
import Layout from '../../src/components/layout'
import { useRouter } from 'next/router'
import CommunityDetail from '../../src/components/communityDetail'

const Communities: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>There is no id passed</p>

  debugger

  return (
    <Layout>
      <CommunityDetail id={Number(id)} />
    </Layout>
  )
}

export default Communities
