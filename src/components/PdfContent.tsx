"use client"

import { Box, Button } from "@chakra-ui/react";

/**
 * Props for the PdfContentBox component.
 * @typedef {Object} PdfContentBoxProps
 * @property {string} id - The unique identifier of the PDF
 * @property {Function} handleHide - The function to handle hiding the PDF content box.
 * @property {string} parsedContent - The parsed content of the PDF.
 */

type PdfContentBoxProps = {
  id: string
  handleHide: () => void;
  parsedContent: string
};

/**
 * PdfContentBox component representing a box to display parsed PDF content
 * @param {PdfContentBoxProps} props - The properties for the PdfContentBox component.
 * @param {string} props.id - The unique identifier of the PDF
 * @param {Function} props.handleHide - The function to handle hiding the PDF content box.
 * @param {string} props.parsedContent - The parsed content of the PDF
 * @returns {JSX.Element} The rendered JSX element
 */

export function PdfContentBox({ id, handleHide, parsedContent }: PdfContentBoxProps) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} mt={2}>
      {/* Display parsed PDF content */}
      <p>{parsedContent}</p>
      {/* Close button */}
      <Button
        onClick={handleHide}
        mt={2}
        borderWidth="1px"
        bg="transparent"
        rounded="md"
        px={2}
        py={1}
        outline="none"
        _hover={{ bg: "gray.200" }}
      >
        Close
      </Button>
    </Box>
  );
}
