import { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react'
import {
  useInsertMemberMutation,
  useDeleteMemberMutation,
} from '../../graphql/generated/graphql'
import useCommunityNftContract from '../hooks/useCommunityNftContract'
import { communityNFTtokenID } from '../config/config'

import type { UserWithNftMembership } from '../types/w3oas'
import type { MemberFieldsFragment } from '../../graphql/generated/graphql'

interface Props {
  communityId: number
  memberCount: number
  members: MemberFieldsFragment['members']
  loggedInUserDiscordId: string | undefined
  loggedInUserId: number | undefined
  isOwner: boolean
}

export default function CommunityMembers({
  communityId,
  memberCount,
  members,
  loggedInUserDiscordId,
  loggedInUserId,
  isOwner,
}: Props) {
  const [insertMember] = useInsertMemberMutation()
  const [deleteMember] = useDeleteMemberMutation()
  const [usersWithMembershipNftInfo, setUsersWithMembershipNftInfo] = useState<
    Array<UserWithNftMembership>
  >([])

  let isLoggedInUserMember = false

  if (loggedInUserDiscordId) {
    isLoggedInUserMember = members
      .map((member) => member.user.discord_id)
      .includes(loggedInUserDiscordId)
  }
  const communityNftContract = useCommunityNftContract()

  useEffect(() => {
    async function getMemberships() {
      if (members) {
        const userWithMembershipInfo: Array<UserWithNftMembership> = []
        for (const member of members) {
          if (member.user.wallet_address) {
            const communityNftMembership =
              await communityNftContract?.balanceOf(
                member.user.wallet_address,
                communityNFTtokenID
              )
            userWithMembershipInfo.push({
              user: member.user,
              isOwningMembershipNft: communityNftMembership
                ? !communityNftMembership.isZero()
                : false,
            })
          }
        }
        setUsersWithMembershipNftInfo(userWithMembershipInfo)
      }
    }
    getMemberships()
  }, [members, communityNftContract])

  const handleJoin = async () => {
    await insertMember({
      variables: {
        community_id: communityId,
        user_id: loggedInUserId,
      },
      refetchQueries: ['getCommunityById'],
    })
  }

  const handleLeave = async () => {
    if (!loggedInUserId) return
    await deleteMember({
      variables: {
        community_id: communityId,
        user_id: loggedInUserId,
      },
      refetchQueries: ['getCommunityById'],
    })
  }

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem border="none">
          <Grid
            my="3"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={2}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Box mt={1} ml={1}>
                {memberCount} w3oas members
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <AccordionButton>
                <AccordionIcon />
              </AccordionButton>
            </GridItem>
          </Grid>
          <AccordionPanel>
            {usersWithMembershipNftInfo.map((member) => (
              <Box key={member.user.discord_id}>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                >
                  <GridItem rowSpan={1} colSpan={2}>
                    <Box>User: {member.user.discord_user_name}</Box>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={4}>
                    <Box>Address: {member.user.wallet_address}</Box>
                  </GridItem>
                  <GridItem rowSpan={1} colSpan={2}>
                    <Box>
                      Membership NFT Claimed: {member.isOwningMembershipNft}
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {!isLoggedInUserMember && (
        <Button variant="outlined" border="1px" onClick={handleJoin}>
          Join Community
        </Button>
      )}
      {isLoggedInUserMember && !isOwner && (
        <Button variant="outlined" border="1px" onClick={handleLeave}>
          Leave Community
        </Button>
      )}
    </>
  )
}
