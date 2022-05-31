import { Box, Center, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import HomeIcon from '@mui/icons-material/Home'

export default function Footer() {
  return (
    <Center>
      <Box>
        <Text fontSize="sm">
          {' '}
          ©{new Date().getFullYear()}
          {' developped by Szabolcs Szentes'}
        </Text>
        <Center>
          <HStack mb={5}>
            <Box pr={5}>
              <a
                href="https://github.com/szmizorsz/w3oas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={GitHubIcon} />
              </a>
            </Box>
            <Box pr={5}>
              <a
                href="mailto:szmizorsz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={EmailIcon} />
              </a>
            </Box>
            <Box pr={5}>
              <a
                href="https://www.szabolcsszentes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={HomeIcon} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/in/szabolcs-szentes-21859b68/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={LinkedInIcon} />
              </a>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Center>
  )
}
