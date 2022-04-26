import React from 'react'
import Link from 'next/link'
import { Box, Text, Heading, Grid, GridItem, Center } from '@chakra-ui/react'

import type { CommunityFieldsFragment } from '../../graphql/generated/graphql'

interface Props {
  community: CommunityFieldsFragment
}

export default function CommunityCard({ community }: Props) {
  const link = `/communities/${community.id}`

  return (
    <Link href={link} passHref>
      <Box
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        _hover={{
          borderColor: 'black',
        }}
      >
        <Box as="a" mb="40">
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
            <Text
              m="5"
              mt="2"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              {community.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
