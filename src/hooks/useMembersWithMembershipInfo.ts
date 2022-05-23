import { useEffect, useState } from 'react'
import { communityNFTtokenID } from '../config/config'

import type { CommunityNFT } from '../typechain'
import type { UserWithNftMembership } from '../types/w3oas'
import type { MemberFieldsFragment } from '../../graphql/generated/graphql'

export default function useMembersWithMembershipInfo(
  communityNftContract: CommunityNFT | null,
  members: MemberFieldsFragment['members'],
  loggedInUserId: number | undefined
) {
  const [usersWithMembershipNftInfo, setUsersWithMembershipNftInfo] =
    useState<Array<UserWithNftMembership>>(members)
  const [loggedInUserHasMembershipNFT, setLoggedInUserHasMembershipNFT] =
    useState(true)

  useEffect(() => {
    async function getMemberships() {
      if (members && communityNftContract) {
        const userWithMembershipInfo: Array<UserWithNftMembership> = []

        await Promise.all(
          members.map(async (member) => {
            let isOwningMembershipNft = false
            if (member.user.wallet_address) {
              const communityNftMembershipBalance =
                await communityNftContract?.balanceOf(
                  member.user.wallet_address,
                  communityNFTtokenID
                )
              isOwningMembershipNft = communityNftMembershipBalance
                ? !communityNftMembershipBalance.isZero()
                : false
            }
            userWithMembershipInfo.push({
              user: member.user,
              isOwningMembershipNft,
            })
            if (member.user.id === loggedInUserId) {
              setLoggedInUserHasMembershipNFT(isOwningMembershipNft)
            }
          })
        )
        setUsersWithMembershipNftInfo(userWithMembershipInfo)
      }
    }
    getMemberships()
  }, [members, communityNftContract, loggedInUserId])

  return { usersWithMembershipNftInfo, loggedInUserHasMembershipNFT }
}
