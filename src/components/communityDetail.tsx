import { useState } from 'react'
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
  CommunityFieldsFragment,
  useUpdateCommunityByIdMutation,
  useDeleteCommunityByIdMutation,
  GetCommunityByIdQuery,
  Exact,
} from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'
import { ApolloQueryResult } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  id: number
  community: CommunityFieldsFragment
  isOwner: boolean
  encodedJwt: string | undefined
  refetch: (
    variables?:
      | Partial<
          Exact<{
            id: number
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetCommunityByIdQuery>>
}

export default function CommunityDetail({
  id,
  community,
  isOwner,
  encodedJwt,
  refetch,
}: Props) {
  const router = useRouter()

  const [modificationOpen, setModificationOpen] = useState(false)
  const [description, setDescription] = useState(community.description)
  const [name, setName] = useState(community.name)
  const [icon, setIcon] = useState(community.icon)

  const [updateCommunity] = useUpdateCommunityByIdMutation({
    refetchQueries: ['getCommunityById'],
  })

  const [deleteCommunity] = useDeleteCommunityByIdMutation()

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCommunityNftDeployment = async (e: any) => {
    e.preventDefault()

    const fetchCommunityNftDeployment = fetch('/api/community-nft/deployment', {
      method: 'POST',
      headers: { authorization: encodedJwt ? `Bearer ${encodedJwt}` : '' },
      body: JSON.stringify({
        communityId: id,
        communityOwnerAddress: community.owner.wallet_address,
        membershipNFTtokenURI: community.icon,
      }),
    })

    await toast.promise(fetchCommunityNftDeployment, {
      pending: 'Deployment initiation',
      success: 'Successful initiation, check back in a few minutes 👌',
      error: 'Something went wrong 🤯',
    })

    // we have to trigger a refetch of the getCommunityById query to refresh the contract address
    refetch({
      id,
    })
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
            value={description ? description : ''}
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
            value={icon ? icon : ''}
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
          {community.nft_contract_address && (
            <Box h="40px">
              <Text m="5" mt="2">
                Community NFT Contract: {community.nft_contract_address}
              </Text>
            </Box>
          )}
        </GridItem>
      </Grid>
      <Box my="6">
        {isOwner && (
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
        )}
        {isOwner && !community.nft_contract_address && (
          <>
            <Button
              ml={5}
              variant="outlined"
              border="1px"
              onClick={handleCommunityNftDeployment}
            >
              Deploy Community NFT contract
            </Button>
            <ToastContainer />
          </>
        )}
      </Box>
    </>
  )
}
