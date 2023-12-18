"use client"
import { Text } from '@chakra-ui/react';

/**
 * Props for the PdfItem component
 * @typedef {Object} PdfItemProps
 * @property {string} id - The unique identifier of the PDF
 * @property {string} filename - The filename of the PDF
 */

type PdfItemProps = {
  id: string
  filename: string
}

/**
 * PdfItem component for rendering an item representing a PDF.
 * @param {Object} props - The properties for the PdfItem component.
 * @param {string} props.id - The unique identifier of the PDF.
 * @param {string} props.filename - The filename of the PDF.
 * @returns {JSX.Element} The rendered JSX element. 
 */

export function PdfItem({ id, filename }: PdfItemProps) {
  return (
    <Text fontSize="lg" fontWeight="medium" color="gray.700" lineHeight="shorter" className="flex gap-1 items-center">
      {/* Display the filename of the PDF */}
      <span>{filename}</span>
    </Text>
  )
}
