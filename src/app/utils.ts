"use server"
import { prisma } from "@/db";
import { redirect } from "next/navigation";

/**
 * Parses the content of a PDF file.
 * @param {File} file - The PDF file to parse.
 * @returns {Promise<{text: string}>} A promise that resolves to the parsed text content of the PDF
 */

export async function parsePdf(file: File) {
    const pdfParser = require("pdf-parse");
    const buffer = await file.arrayBuffer();
    const data = new Uint8Array(buffer);
    const result = await pdfParser(data);
    return { text: result.text };
}

/**
 * Creates a new PDF record in the database.
 * @param {FormData} data - The form data containing the PDF file
 */

export async function createPdf(data: FormData) {
    const file = data.get("pdf") as File;
    if (!file) {
        throw new Error("Invalid PDF file");
    }
    const { text } = await parsePdf(file);
    await prisma.pdf.create({
        data: {
            filename: file.name,
            parsedContent: text,
        }
    });
    redirect("/upload-pdf")
}

/**
 * Retrieves all uploaded PDFs from the database
 * @returns {Promise<any[]>} A promise that resolves to an array of uploaded PDF records
 */

export async function getUploads() {
    return prisma.pdf.findMany()
}

/**
 * Deletes a specific PDF record from the database
 * @param {string} id - The id of the PDF to delete 
 */

export async function handleDelete(id: string) {
    "use server"
    await prisma.pdf.delete({ where: { id } });
}
