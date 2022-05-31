import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import PeopleIcon from '@mui/icons-material/People'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import KeyIcon from '@mui/icons-material/Key'

export default function Description() {
  return (
    <Center>
      <Box>
        <HStack mb={5}>
          <Box mr={5}>
            <Icon as={PeopleIcon} />
          </Box>
          <Text fontSize="lg">Web3 onboarding for existing communities</Text>
        </HStack>
        <HStack mb={5}>
          <Box mr={5}>
            <Icon as={LocalLibraryIcon} />
          </Box>
          <Text fontSize="lg">Community specific membership NFTs</Text>
        </HStack>
        <HStack mb={5}>
          <Box mr={5}>
            <Icon as={LocalGasStationIcon} />
          </Box>
          <Text fontSize="lg">Gasless experience</Text>
        </HStack>
        <HStack mb={5}>
          <Box mr={5}>
            <Icon as={ConnectWithoutContactIcon} />
          </Box>
          <Text fontSize="lg">Discord integration</Text>
        </HStack>
        <HStack mb={5}>
          <Box mr={5}>
            <Icon as={KeyIcon} />
          </Box>
          <Text fontSize="lg">
            Seamless wallett experience without self-custodial private key
            management
          </Text>
        </HStack>
      </Box>
    </Center>
  )
}
