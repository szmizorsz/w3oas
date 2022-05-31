import React from 'react'
import Link from 'next/link'
import { Box, HStack, Image, Grid, GridItem, Center } from '@chakra-ui/react'

export default function Technology() {
  return (
    <Box my="12">
      <HStack>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <Link href="https://hasura.io/" passHref>
              <Box
                mx={30}
                w="100%"
                height="56"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a">
                  <Center>
                    <Image
                      ml={3}
                      src="/hasura.png"
                      alt="icon"
                      width="65%"
                    ></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="https://www.postgresql.org/" passHref>
              <Box
                mx={30}
                w="100%"
                height="56"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a" mb="40">
                  <Center>
                    <Image
                      src="/postgresql.png"
                      alt="icon"
                      height="48"
                      pt="6"
                    ></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="https://nextjs.org/" passHref>
              <Box
                mx={30}
                w="100%"
                height="56"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a" mb="40">
                  <Center>
                    <Image src="/nextjs.png" alt="icon" height="64"></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="https://polygon.technology/" passHref>
              <Box
                mx={30}
                w="100%"
                height="48"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a" mb="40">
                  <Center>
                    <Image
                      src="/polygon.png"
                      alt="icon"
                      pt="16"
                      width="80%"
                    ></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="https://web3auth.io/" passHref>
              <Box
                mx={30}
                w="100%"
                height="48"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a" mb="40">
                  <Center>
                    <Image
                      src="/web3auth.png"
                      alt="icon"
                      pt="16"
                      width="80%"
                    ></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="https://www.openzeppelin.com/" passHref>
              <Box
                mx={30}
                w="100%"
                height="48"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: 'black',
                }}
              >
                <Box as="a" mb="40">
                  <Center>
                    <Image
                      src="/openzeppelin.png"
                      alt="icon"
                      pt="16"
                      width="80%"
                    ></Image>
                  </Center>
                </Box>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </HStack>
    </Box>
  )
}
