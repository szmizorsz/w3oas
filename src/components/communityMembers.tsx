import { useState } from 'react'
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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  HStack,
} from '@chakra-ui/react'
import {
  useInsertMemberMutation,
  useDeleteMemberMutation,
} from '../../graphql/generated/graphql'
import useCommunityNftContract from '../hooks/useCommunityNftContract'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ClaimCommunityNftButton from './claimCommunityNftButton'
import useMembersWithMembershipInfo from '../hooks/useMembersWithMembershipInfo'

import type { MemberFieldsFragment } from '../../graphql/generated/graphql'

interface Props {
  communityId: number
  memberCount: number
  members: MemberFieldsFragment['members']
  loggedInUserDiscordId: string | undefined
  loggedInUserId: number | undefined
  isOwner: boolean
  communityNftContractAddress: string | null | undefined
  encodedJwt: string | undefined
}

export default function CommunityMembers({
  communityId,
  memberCount,
  members,
  loggedInUserDiscordId,
  loggedInUserId,
  isOwner,
  communityNftContractAddress,
  encodedJwt,
}: Props) {
  const [insertMember] = useInsertMemberMutation()
  const [deleteMember] = useDeleteMemberMutation()
  const [checkedMembers] = useState(new Map<string, boolean>())
  const [airdropDisabled, setAirdropDisabled] = useState(true)

  let isLoggedInUserMember = false

  if (loggedInUserDiscordId) {
    isLoggedInUserMember = members
      .map((member) => member.user.discord_id)
      .includes(loggedInUserDiscordId)
  }
  const communityNftContract = useCommunityNftContract(
    communityNftContractAddress
  )

  const { usersWithMembershipNftInfo, loggedInUserHasMembershipNFT } =
    useMembersWithMembershipInfo(communityNftContract, members, loggedInUserId)

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

  const handleAirdrop = async () => {
    const addresses = Array.from(checkedMembers.entries())
      .filter((entry) => entry[1])
      .map((entry) => entry[0])

    const fetchCommunityNftMembershipAirdrop = fetch(
      '/api/community-nft/airdrop',
      {
        method: 'POST',
        headers: { authorization: encodedJwt ? `Bearer ${encodedJwt}` : '' },
        body: JSON.stringify({
          communityNftContractAddress,
          addresses,
        }),
      }
    )

    await toast.promise(fetchCommunityNftMembershipAirdrop, {
      pending: 'Airdrop in progress',
      success: 'Successful airdrop 👌',
      error: 'Something went wrong 🤯',
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
            <TableContainer>
              <Table size="sm" variant="unstyled">
                <Thead>
                  <Tr>
                    <Th>User</Th>
                    <Th>Address</Th>
                    <Th>Membership NFT</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {usersWithMembershipNftInfo.map((member) => (
                    <Tr key={member.user.discord_id}>
                      <Td> {member.user.discord_user_name}</Td>
                      <Td> {member.user.wallet_address}</Td>
                      <Td>
                        {member.isOwningMembershipNft && <Box>Claimed</Box>}
                        {!member.isOwningMembershipNft &&
                          isOwner &&
                          communityNftContractAddress &&
                          member.user.wallet_address && (
                            <Checkbox
                              isChecked={checkedMembers.get(
                                member.user.wallet_address
                              )}
                              onChange={(e) => {
                                if (member.user.wallet_address) {
                                  checkedMembers.set(
                                    member.user.wallet_address,
                                    e.target.checked
                                  )
                                  setAirdropDisabled(
                                    Array.from(checkedMembers.values()).filter(
                                      (value) => value
                                    ).length === 0
                                  )
                                }
                              }}
                            ></Checkbox>
                          )}
                      </Td>
                    </Tr>
                  ))}
                  {isOwner && communityNftContractAddress && (
                    <Tr key="action_row">
                      <Td></Td>
                      <Td></Td>
                      <Td>
                        <Button
                          variant="outlined"
                          border="1px"
                          disabled={airdropDisabled}
                          onClick={handleAirdrop}
                        >
                          Airdrop
                        </Button>
                        <ToastContainer />
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <HStack>
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
        {!loggedInUserHasMembershipNFT &&
          isLoggedInUserMember &&
          communityNftContractAddress && (
            <ClaimCommunityNftButton
              loggedInUserId={loggedInUserId}
              nftContractAddress={communityNftContractAddress}
              encodedJwt={encodedJwt}
            />
          )}
      </HStack>
    </>
  )
}
