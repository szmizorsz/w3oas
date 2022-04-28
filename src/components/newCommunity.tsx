import { useState, useEffect } from 'react'
import { Button, HStack, FormControl, Input, Textarea } from '@chakra-ui/react'
import { useInsertCommunityMutation } from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

interface Props {
  id: string
}

export default function NewCommunity({ id }: Props) {
  const router = useRouter()

  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')

  const [insertCommunity] = useInsertCommunityMutation()

  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  useEffect(() => {
    const guild = session?.guilds.filter((guild) => guild.id === id)
    if (guild?.length === 1) {
      setName(guild[0].name)
      setIcon(guild[0].icon)
    }
  }, [session, id])

  if (sessionLoading) return <p>Session loading...</p>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = async (e: any) => {
    e.preventDefault()
    if (!session?.userId) return
    await insertCommunity({
      variables: {
        discord_id: id,
        name,
        description,
        icon,
        owner_id: session?.userId,
      },
    })

    setName('')
    setDescription('')
    setIcon('')

    router.push('/community')
  }

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
        <Button variant="outlined" border="1px" onClick={handleSave}>
          Save
        </Button>
        <Button
          variant="outlined"
          border="1px"
          onClick={(e) => {
            e.preventDefault()
            router.push('/community')
          }}
        >
          Close
        </Button>
      </HStack>
    </>
  )
}
