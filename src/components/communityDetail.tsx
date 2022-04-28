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

interface Props {
  id: number
}

export default function CommunityDetail({ id }: Props) {
  const router = useRouter()

  const [modificationOpen, setModificationOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')

  const { data, loading } = useGetCommunityByIdQuery({
    variables: {
      id,
    },
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

  if (loading) return <p>Loading...</p>

  const community = data?.community_by_pk

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
          <Grid templateColumns="repeat(10, 1fr)" gap={6}>
            <GridItem colSpan={8}>
              <Heading m="5" mb="0" mr="0" as="h4" size="md">
                {community.name} - owner: {community.owner.discord_user_name}
              </Heading>
            </GridItem>
            <GridItem colSpan={2}>
              <Center>
                <Box
                  borderWidth="1px"
                  borderRadius="xl"
                  background="#A0AEC0"
                  my="3"
                >
                  <Text color="white" px="2">
                    126 w3oas members
                  </Text>
                </Box>
              </Center>
            </GridItem>
          </Grid>
          <Box h="40px">
            <Text m="5" mt="2">
              {community.description}
            </Text>
          </Box>
        </GridItem>
      </Grid>
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
    </>
  )
}
