/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  HStack,
  Text,
  Grid,
  GridItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import PeopleIcon from '@mui/icons-material/People'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import KeyIcon from '@mui/icons-material/Key'

export default function Description() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Grid templateColumns="repeat(10, 1fr)" gap={6}>
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={8}>
        <Center>
          <Box>
            <HStack mb={5}>
              <Box mr={5}>
                <Icon as={PeopleIcon} />
              </Box>
              <Text fontSize="lg">
                Web3 onboarding for existing communities
              </Text>
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
      </GridItem>
      <GridItem colSpan={1}>
        <Button onClick={onOpen}>Try out!</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Try out!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You can experiment with the service: in Discord create a new
              server and invite some members to the server. Once you logged into
              w3oas with your discord user, you will be able to create a w3oas
              community based on your newly created discord server. You can
              deploy a community NFT contract for your new w3oas community. Your
              discord server's members can join the w3oas community and enjoy
              their membership NFTs.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </GridItem>
    </Grid>
  )
}
