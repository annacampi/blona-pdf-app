import { Heading, Link, Box, Button } from '@chakra-ui/react'

/**
 * EntryPage component representing the entry point of the application.
 * @returns {JSX.Element} The rendered JSX element.
 */

export default async function EntryPage() {
  return (
    <Box
      p={4}
      maxW="md"
      mx="auto"
      mt={20}
      bg="gray.100"
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <header>
        <Heading mb={4}>PDF Uploader</Heading>
      </header>
      {/* Link to the login page with a login button */}
      <Link href="/login">
        <Button colorScheme="blue" size="md" width="100%">
          Log In
        </Button>
      </Link>
    </Box>
  )
}
