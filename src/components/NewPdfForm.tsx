"use client"
import { createPdf } from "@/app/utils";
import { Box, Button, Flex, Input, Link as ChakraLink } from "@chakra-ui/react";

/**
 * NewPdfForm component for rendering the form to upload a new PDF.
 * @returns {JSX.Element} The rendered JSX element.
 */

export function NewPdfForm() {
    return (
        <form action={createPdf} className="flex gap-2 flex-col">
            <Input
                type="file"
                name="pdf"
                border="1px"
                borderColor="gray.300"
                bg="white"
                rounded="md"
                px={3}
                py={2}
                outline="none"
                focusBorderColor="blue.500"
            />
            <Flex gap={2} justify="flex-end">
                <ChakraLink
                    href=".."
                    bg="red.500"
                    color="white"
                    rounded="md"
                    px={4}
                    _hover={{ bg: "red.600" }}
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                    py={2}
                >
                    Cancel
                </ChakraLink>
                <Button
                    type="submit"
                    bg="blue.500"
                    color="white"
                    rounded="md"
                    px={4}
                    _hover={{ bg: "blue.600" }}
                >
                    Upload PDF
                </Button>
            </Flex>
        </form>
    );
}
