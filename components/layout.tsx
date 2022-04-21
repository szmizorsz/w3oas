import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  IconButton,
} from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import { ErrorBoundary } from 'react-error-boundary'

import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <Alert status="error" maxW="xl">
      <AlertIcon />
      <AlertTitle mr={2}>Something went wrong:</AlertTitle>
      <AlertDescription pr={8}>{error.message}</AlertDescription>
      <IconButton
        position="absolute"
        right="8px"
        top="4px"
        aria-label="Retry"
        icon={<RepeatIcon />}
        onClick={resetErrorBoundary}
      />
    </Alert>
  )
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box w="70%" h="800px" mx="60" mt="10">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Box>
    </>
  )
}
