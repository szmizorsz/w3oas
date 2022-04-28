import { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Center,
  Image,
  Text,
  Button,
  HStack,
  FormControl,
  Input,
  Textarea,
} from '@chakra-ui/react'
import {
  useGetCommunityByIdQuery,
  useUpdateCommunityByIdMutation,
  useDeleteCommunityByIdMutation,
} from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'
import CommunityMembers from './communityMembers'
import { useSession } from 'next-auth/react'

interface Props {
  id: number
}

export default function CommunityDetail({ id }: Props) {
  const router = useRouter()

  const [modificationOpen, setModificationOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  const { data, loading } = useGetCommunityByIdQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    if (data) {
      if (data.community_by_pk?.name) {
        setName(data.community_by_pk?.name)
      }
      if (data.community_by_pk?.description) {
        setDescription(data.community_by_pk.description)
      }
      if (data.community_by_pk?.icon) {
        setIcon(data.community_by_pk.icon)
      }
    }
  }, [data])

  const [updateCommunity] = useUpdateCommunityByIdMutation({
    refetchQueries: ['getCommunityById'],
  })

  const [deleteCommunity] = useDeleteCommunityByIdMutation()

  if (sessionLoading) return <p>Session loading...</p>

  if (loading) return <p>Loading...</p>

  const community = data?.community_by_pk

  const isOwner = community?.owner.id === session?.userId

  if (!community) return <p>No community found with the given id!</p>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = async (e: any) => {
    e.preventDefault()
    await updateCommunity({
      // All properties has to be passed not just the ones that we want to change
      // otherwise Hasura will treat them as null values and set the property to null
      variables: {
        id,
        name,
        description,
        icon,
      },
    })
    setModificationOpen(false)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = async (e: any) => {
    e.preventDefault()
    await deleteCommunity({
      variables: {
        id,
      },
    })
    router.push('/community')
    setModificationOpen(false)
  }

  if (modificationOpen) {
    return (
      <>
        <FormControl>
          <Input
            my={1}
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              e.preventDefault()
              setName(e.target.value)
            }}
          />
          <Textarea
            my={1}
            size="md"
            resize="vertical"
            id="description"
            placeholder="description"
            value={description}
            onChange={(e) => {
              e.preventDefault()
              setDescription(e.target.value)
            }}
          />
          <Input
            my={1}
            id="icon"
            type="text"
            placeholder="icon"
            value={icon}
            onChange={(e) => {
              e.preventDefault()
              setIcon(e.target.value)
            }}
          />
        </FormControl>
        <HStack ml="1" mt="5" spacing="15px">
          <Button variant="outlined" border="1px" onClick={handleUpdate}>
            Save
          </Button>
          <Button variant="outlined" border="1px" onClick={handleDelete}>
            Delete
          </Button>
          <Button
            variant="outlined"
            border="1px"
            onClick={(e) => {
              e.preventDefault()
              setModificationOpen(false)
            }}
          >
            Close
          </Button>
        </HStack>
      </>
    )
  }

  return (
    <>
      <Grid templateColumns="repeat(10, 1fr)" gap={6}>
        <Center>
          <GridItem colSpan={1}>
            {community.icon && <Image src={community.icon} alt="icon"></Image>}
          </GridItem>
        </Center>
        <GridItem colSpan={9}>
          <Heading m="5" mb="0" mr="0" as="h4" size="md">
            {community.name} - owner: {community.owner.discord_user_name}
          </Heading>
          <Box h="40px">
            <Text m="5" mt="2">
              {community.description}
            </Text>
          </Box>
        </GridItem>
      </Grid>
      {isOwner && (
        <Box my="6">
          <Button
            variant="outlined"
            border="1px"
            onClick={(e) => {
              e.preventDefault()
              setModificationOpen(true)
            }}
          >
            Modify
          </Button>
        </Box>
      )}
      {community.members_aggregate.aggregate?.count && (
        <CommunityMembers
          communityId={community.id}
          memberCount={community.members_aggregate.aggregate?.count}
          members={community.members}
          loggedInUserDiscordId={session?.providerId}
          loggedInUserId={session?.userId}
          isOwner={isOwner}
        />
      )}
    </>
  )
}
