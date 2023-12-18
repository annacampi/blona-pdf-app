"use client"
import { Button } from '@chakra-ui/react';

/**
 * CloseViewPdfButton component representing a button to close the PDF content view.
 * @returns {JSX.Element} The rendered JSX element.
 */

export function CloseViewPdfButton() {
    return (
        <Button mt={2}
            bg="blue.300"
            px={2}
            py={1}
            rounded="md">
            Close
        </Button>
    );
}
