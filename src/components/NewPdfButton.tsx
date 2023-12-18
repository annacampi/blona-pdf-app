"use client"
import { Link } from "@chakra-ui/next-js";

/**
 * NewPdfButton component for rendering a button to add new PDFs.
 * @returns {JSX.Element} The rendered JSX element.
 */

export function NewPdfButton() {
    return (<>
        <Link 
        href="/new"
        color="white"
        bg="blue.500"
        rounded="md"
        px={4}
        py={2}
        _hover={{ bg: "blue.600" }}
        outline="none">
        Add PDFs
    </Link>
    </>
    );
}
