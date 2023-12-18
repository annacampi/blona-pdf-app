# PDF Uploader

PDF Uploader is a simple web application that allows users to upload PDF files, view their content, and manage their uploaded PDFs.

## Features

- **Upload PDFs:** Users can upload PDF files using a simple form.
- **View PDF Content:** Users can view the parsed content of uploaded PDFs.
- **Delete PDFs:** Users can delete uploaded PDFs.

## Technologies Used

- **Next.js:** The project is built using the Next.js framework for React.
- **Chakra UI:** The UI components are styled using Chakra UI for a clean and responsive design.
- **Prisma:** Prisma is used as the database ORM for interacting with the database.
- **pdf-parse:** The pdf-parse library is utilized for parsing PDF content.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/pdf-uploader.git
   cd pdf-uploader
2. **Install Dependencies**
    ```bash
    npm install
3. **Conigure the database**
   - Set up a database coniguration in '.env' file
   - Run database migrations:
    ```bash
    npx prisma migrate dev
4. **Run the application**
    ```bash
    npm run dev
5. **Access the application**
    
    Open your web browser and go to http://localhost:3000.

## Usage

1. **Log in with the correct credentials**

2. **Upload a PDF**
- Click on the "New" button to navigate to the upload page.
- Choose a PDF file and click "Upload PDF."

3. **View PDF Content**
- Click on "View PDF Content" to see the parsed content of a specific PDF.

4. **Delete PDF**
- Each PDF has a "Delete" button to remove it.