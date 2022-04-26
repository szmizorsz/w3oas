import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import ApolloProviderWithAuth from '../src/components/apolloProviderWithAuth'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import AvailableCommunities from '../src/components/availableCommunities'

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const sessionLoading = status === 'loading'

  if (sessionLoading) return <p>Loading...</p>

  return (
    <ApolloProviderWithAuth>
      <Layout>
        {session && (
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Available communities</Tab>
              <Tab>My communities</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AvailableCommunities />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
        {!session && <p>Please, sign in!</p>}
      </Layout>
    </ApolloProviderWithAuth>
  )
}

export default Home
