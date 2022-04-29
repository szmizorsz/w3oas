import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useGetExistingCommunitiesByDiscordIdsQuery } from '../../graphql/generated/graphql'
import Link from 'next/link'

import type { Guild } from 'next-auth'

interface Props {
  guilds: Array<Guild>
}

const CreateCommunityButtonAndModal = ({ guilds }: Props) => {
  const guildDiscordIds = guilds
    .filter((guild) => guild.owner === true)
    .map((guild) => guild.id)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: existingCommunities, error } =
    useGetExistingCommunitiesByDiscordIdsQuery({
      variables: {
        discord_ids: guildDiscordIds,
      },
      fetchPolicy: 'cache-and-network',
    })

  if (!isOpen) return <Button onClick={onOpen}>Create community</Button>

  if (error) return <p>Error! {error.message}</p>

  const existingCommunityDiscordIds = existingCommunities?.community.map(
    (community) => community.discord_id
  )
  const nonExistingGuilds = guilds.filter(
    (guild) =>
      !existingCommunityDiscordIds?.includes(guild.id) && guild.owner === true
  )

  return (
    <>
      <Button onClick={onOpen}>Create community</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Discord server</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {nonExistingGuilds.length > 0 && (
              <Box>
                You are the owner of the following discord servers that are not
                yet registered as w3oas communities:
                {nonExistingGuilds.map((guild) => (
                  <Box key={guild.id.toString()} my="3">
                    <Link
                      href={`/new-community/${guild.id.toString()}`}
                      passHref
                    >
                      <ChakraLink> {guild.name}</ChakraLink>
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
            {nonExistingGuilds.length === 0 && (
              <Box>
                There is no Discord server where you are the owner and not yet
                registered as w3oas community!
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateCommunityButtonAndModal
