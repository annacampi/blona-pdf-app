import { getUploads, handleDelete } from "@/app/utils"
import { Box, Flex, Heading, Stack } from "@chakra-ui/react"
import { DeleteButton } from "./DeleteButton"
import { NewPdfButton } from "./NewPdfButton"
import { PdfItem } from "./PdfItem"
import { ViewPdfButton } from "./ViewPdfButton"

/**
 * Component to display a list of uploaded PDFs
 * @returns {JSX.Element} The rendered JSX element
 */

export async function UploadedPdfs() {
  // Fetch uploaded PDFs
  const uploadedPdfs = await getUploads()
  return (
    <Box p={6} borderRadius="md" bg="gray.100">
      {/* Page header */}
      <Flex justify="space-between" align="center" mb={4} >
        <Heading fontSize="4xl" color="blue.500" >
          Uploaded PDFs
        </Heading>
        <NewPdfButton />
      </Flex>
      {/* List of uploaded PDFs */}
      <Stack spacing={4} pl={4}>
        {uploadedPdfs.map((pdf) => (
          <Flex
            key={pdf.id}
            alignItems="center"
            justifyContent="space-between"
            p={2}
            mb={2}
            bg="white"
            rounded="md"
            borderWidth="1px"
          >
            {/* Display PDF information */}
            <PdfItem {...pdf} />
            {/* Buttons to interact with the PDF */}
            <Flex direction="column" align="flex-start">
              <DeleteButton id={pdf.id} handleDelete={handleDelete} />
              <ViewPdfButton id={pdf.id} parsedContent={pdf.parsedContent} />
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Box>
  )
}
