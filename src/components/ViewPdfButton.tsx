"use client"

import { useState } from "react";
import { PdfContentBox } from "./PdfContent";
import { Button } from "@chakra-ui/react";

/**
 * Props for the ViewPdfButton component.
 * @typedef {Object} ViewButtonProps
 * @property {string} id - The unique identifier of the PDF.
 * @property {string} parsedContent - The parsed content of the PDF.
 */

type ViewButtonProps = {
  id: string
  parsedContent: string;
};

/**
 * ViewPdfButton component for rendering a button to view the content of a PDF.
 * @param {Object} props - The properties for the ViewPdfButton component.
 * @param {string} props.id - The unique identifier of the PDF.
 * @param {Function} props.handleView - The function to handle viewing the PDF.
 * @param {string} props.parsedContent - The parsed content of the PDF.
 * @returns {JSX.Element} The rendered JSX element.
 */

export function ViewPdfButton({ id, parsedContent }: ViewButtonProps) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = async () => {
    setShowContent(true);
  };

  return (<>
    <Button
      onClick={handleClick}
      color="white"
      bg="blue.500"
      rounded="md"
      px={4}
      py={2}
      _hover={{ bg: "blue.700" }}
      outline="none"
      mt={3}>
      View PDF Content
    </Button>
    {showContent && <PdfContentBox id={id} handleHide={() => setShowContent(false)} parsedContent={parsedContent} />}
  </>
  );
}
