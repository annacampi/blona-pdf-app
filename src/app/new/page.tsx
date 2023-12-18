import { NewPdfForm } from "@/components/NewPdfForm"
import { Box, Flex, Heading } from "@chakra-ui/react";

/**
 * NewPdfForm component for rendering the form to upload a new PDF.
 * @returns The rendered JSX element.
 */

export default function NewPdf() {
  return (
    <Box bg="gray.100" p={6} borderRadius="md">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading fontSize="3xl" color="blue.500">
          Upload a new PDF
        </Heading>
      </Flex>
      <NewPdfForm />
    </Box>
  )
}
