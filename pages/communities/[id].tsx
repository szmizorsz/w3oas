import type { NextPage } from 'next'
import Layout from '../../src/components/layout'
import { useRouter } from 'next/router'
import CommunityDetail from '../../src/components/communityDetail'
import { useSession } from 'next-auth/react'
import { useGetCommunityByIdQuery } from '../../graphql/generated/graphql'
import CommunityMembers from '../../src/components/communityMembers'

const Communities: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  const { data, refetch } = useGetCommunityByIdQuery({
    variables: {
      id: Number(id),
    },
    fetchPolicy: 'cache-and-network',
  })

  if (!id) return <p>There is no id passed</p>

  if (sessionLoading) return <p>Session loading...</p>

  const community = data?.community_by_pk

  const isOwner = community?.owner.id === session?.userId

  if (!community) return <p>No community found with the given id!</p>

  return (
    <Layout>
      <CommunityDetail
        id={Number(id)}
        community={community}
        isOwner={isOwner}
        encodedJwt={session?.encodedJwt}
        refetch={refetch}
      />
      {community.members_aggregate.aggregate?.count && (
        <CommunityMembers
          communityId={community.id}
          memberCount={community.members_aggregate.aggregate?.count}
          members={community.members}
          loggedInUserDiscordId={session?.providerId}
          loggedInUserId={session?.userId}
          isOwner={isOwner}
          communityNftContractAddress={community.nft_contract_address}
          encodedJwt={session?.encodedJwt}
        />
      )}
    </Layout>
  )
}

export default Communities
