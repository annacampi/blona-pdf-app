"use client"
import { Button } from '@chakra-ui/react';

/**
 * Props for the DeleteButton component.
 * @typedef {Object} DeleteButtonProps
 * @property {string} id - The unique identifier of the PDF.
 * @property {function} handleDelete - The function to handle the deletion of the PDF. 
 */
type DeleteButtonProps = {
  id: string
  handleDelete: (id: string) => void;
};

/**
 * DeleteButton component for rendering a button to delete a PDF.
 * @param {Object} props - The properties for the DeleteButton component.
 * @param {string} props.id - The unique identifier of the PDF.
 * @param {Function} props.handleDelete - The function to handle the deletion of the PDF.
 * @returns {JSX.Element} The rendered JSX element.
 */

export function DeleteButton({ id, handleDelete }: DeleteButtonProps) {

  return (
    <Button
      onClick={e => handleDelete(id)}
      color="white"
      bg="red.500"
      rounded="md"
      px={4}
      py={2}
      _hover={{ bg: "red.700" }}
      outline="none"
    >
      Delete PDF
    </Button>
  );
}
