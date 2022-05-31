import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import AvailableCommunities from '../src/components/community/availableCommunities'
import { Grid, GridItem, Flex, Spacer, Box } from '@chakra-ui/react'
import CreateCommunityButtonAndModal from '../src/components/community/createCommunityButtonAndModal'
import MyCommunities from '../src/components/community/myCommunities'

const Community: NextPage = () => {
  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  if (sessionLoading) return <p>Loading...</p>

  return (
    <Layout>
      {session && (
        <Tabs variant="enclosed">
          <Grid templateColumns="repeat(10, 1fr)" gap={6}>
            <GridItem colSpan={8}>
              <TabList>
                <Tab>My communities</Tab>
                <Tab>Available communities</Tab>
              </TabList>
            </GridItem>
            <GridItem colSpan={2} placeItems="start">
              <Flex>
                <Box></Box>
                <Spacer />
                <CreateCommunityButtonAndModal guilds={session.guilds} />
              </Flex>
            </GridItem>
          </Grid>
          <TabPanels>
            <TabPanel>
              <MyCommunities userId={session.userId} />
            </TabPanel>
            <TabPanel>
              <AvailableCommunities
                userId={session.userId}
                guilds={session.guilds}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
      {!session && <p>Please, sign in!</p>}
    </Layout>
  )
}

export default Community
