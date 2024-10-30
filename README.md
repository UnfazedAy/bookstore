# AXIA Backend Development Assessment - Bookstore API

This project is a backend API for managing a bookstore, where users can perform CRUD operations on books, authors, and genres. It demonstrates API development skills, database modeling, and code documentation.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Requirements](#requirements)
- [Database Structure](#database-structure)
- [Code Structure](#code-structure)
- [API Endpoints](#api-endpoints)
  - [Author Endpoints](#author-endpoints)
  - [Genre Endpoints](#genre-endpoints)
  - [Book Endpoints](#book-endpoints)
- [API Documentation](#api-documentation)
- [Video Walkthrough](#video-walkthrough)
- [Notes](#notes)

## Project Overview

The bookstore API provides the following features:

- Manage books, authors, and genres through CRUD operations.
- Filter and retrieve books by authors and genres.
- Establish relational data models to reflect the following relationships:
  - A book has one author and one genre.
  - An author can have multiple books.
  - A genre can include multiple books.

The project includes clear API documentation and a video walkthrough showcasing API functionality, schema design, and code organization.

## Requirements

- **Database**: MongoDB (used for data modeling and handling relations between books, authors, and genres).
- **Environment**: Node.js with Express.js.
- **Documentation**: Postman documentation (linked or included in the repository).

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/UnfazedAy/bookstore.git
   cd bookstore

2. **Install dependencies**:

   ```bash
   npm install

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
    NODE_ENV=development or production
    PORT=3000
    HOST='127.0.0.1'
    MONGODB_URI_DEV=mongodb://localhost:27017/bookstore_dev or your mongodb uri/bookstore_dev
    MONGODB_URI_PROD=mongodb://localhost:27017/bookstore_prod or your mongodb uri/bookstore_prod
   ```

4. **Run the application**:

   - For development:

     ```bash
     npm run dev
     ```

   - For production:

     ```bash
     npm start

5. **Access the API**:

   The API is now running on `http://localhost:3000` or the specified port in the `.env` file.

6. **Test the API**:

   Use the provided Postman documentation to test the API endpoints and verify the functionality.
   Or directly test using this link [Postman Documentation Link](https://winter-sunset-776630.postman.co/workspace/Team-Workspace~6a134688-e66e-4b04-8caa-b6481e970bb5/collection/24981589-d0eb5199-5f53-417b-91f7-20e0a1b96b2c?action=share&creator=24981589&active-environment=24981589-58a94f7e-f785-470c-88ff-1656e57921cd)

## Database Structure

1. **Books**:
   - Fields: `title`, `description`, `author`, `genre`, `published_date`
   - Relationship: Linked to a single author and genre

2. **Authors**:
   - Fields: `name`, `bio`
   - Relationship: Can have multiple books

3. **Genres**:
   - Fields: `name`, `description`
   - Relationship: Can have multiple books

## Code Structure

The project structure is organized as follows:

- `config/`: Database configuration and environment variables with logger setup
- `controllers/`: Controller functions / endpoints for each type of data (books, authors, genres)
- `models/`: Mongoose models for books, authors, and genres
- `routes/`: Express routes for each endpoint
- `helpers/`: helper functions and error handling
- `middlewares/`: Middleware functions for request validation and error handling
- `server.js`: Main file to start the server and connect to the database using Express.js
- `package.json`: Contains project dependencies and scripts
- `.env`: Environment variables for the project
- `.gitignore`: Specifies files and directories to ignore in Git
- `.eslint.config.mjs`: ESLint configuration file
- `README.md`: Project documentation

## API Endpoints

The API provides the following endpoints:

### Author Endpoints

1. **Create an Author**
   - **Endpoint**: `POST /api/v1/authors/create`
   - **Description**: Creates a new author by taking in `name` and `bio` as request body fields. The bio is validated to be within 100 characters.
   - **Sample Request Body**:

     ```json
     {
       "name": "Relentless Coder",
       "bio": "It's all about the challenge it brings and the soothing feeling when you finally get it done."
     }
     ```

---

### Genre Endpoints

1. **Create a Genre**
   - **Endpoint**: `POST /api/v1/genres/create`
   - **Description**: Creates a new genre with `name` and `description` fields.
   - **Sample Request Body**:

     ```json
     {
       "name": "Tragic",
       "description": "Built around the brutal and sad nature and happenings around."
     }
     ```

---

### Book Endpoints

1. **Create a Book**
   - **Endpoint**: `POST /api/v1/books/create`
   - **Description**: Creates a new book with details such as title, description, author ID, and genre ID. The published date is automatically set to the current date.
   - **Sample Request Body**:

     ```json
     {
       "title": "The Great Gatsby",
       "description": "A novel set in the Jazz Age.",
       "author": "67216fb4fc9f1105205c2f80",
       "genre": "67216fc0fc9f1105205c2f82"
     }
     ```

2. **Update a Book**
   - **Endpoint**: `POST /api/v1/books/:id`
   - **Description**: Updates an existing book based on its ID.
   - **Sample Request Body**:

     ```json
     {
       "title": "The Great Gatsby",
       "description": "A classic novel set in the Jazz Age."
     }
     ```

3. **Get All Books**
   - **Endpoint**: `GET /api/v1/books`
   - **Description**: Retrieves all books, with optional query parameters for filtering by author and genre.
   - **Query Parameters**:
     - `author`: Filter by author name
     - `genre`: Filter by genre name
   - **Sample Request**:

     ``` http
     GET /api/v1/books?author=Relentless%20Coder&genre=Thriller
     ```

4. **Get a Single Book**
   - **Endpoint**: `GET /api/v1/books/:id`
   - **Description**: Retrieves a specific book’s details by ID, including its author and genre information.
   - **Sample URL**:

     ``` http
     GET /api/v1/books/672184d433e2da02d8aa9a62
     ```

5. **Delete a Book**
   - **Endpoint**: `DELETE /api/v1/books/:id`
   - **Description**: Deletes a specific book from the database by ID.
   - **Sample URL**:

     ``` http
     DELETE /api/v1/books/672184d433e2da02d8aa9a62
     ```

---

Each of these endpoints should be tested using the provided request body and URL structure to ensure functionality. Replace `{{URL}}` with the appropriate base URL for your API, such as `http://localhost:3000` in a local environment.

### API Documentation

The API is documented using (click 👉👉 to test via postman) [Postman Documentation Link](https://winter-sunset-776630.postman.co/workspace/Team-Workspace~6a134688-e66e-4b04-8caa-b6481e970bb5/collection/24981589-d0eb5199-5f53-417b-91f7-20e0a1b96b2c?action=share&creator=24981589&active-environment=24981589-58a94f7e-f785-470c-88ff-1656e57921cd), which includes:

- Request and response examples
- Status codes for each endpoint
- Expected JSON formats
- Query parameters for filtering

## Video Walkthrough

A video walkthrough of the API functionality, schema design, and code organization is available at this [link](https://drive.google.com/file/d/1j-Bx0BIxQLm3mLN0p6EdFbIJj37LAox4/view?usp=sharing) (click 👉👉 to watch the video ).

---

## Notes

- The API is designed to be simple and easy to use, with clear documentation and error handling.
- The database schema is structured to reflect the relationships between books, authors, and genres.
- The codebase is organized into separate files for routes, controllers, models, and middleware functions.
- The API endpoints are tested using Postman, with sample request bodies and query parameters provided.
- The video walkthrough demonstrates the API functionality and code structure in action.
- Make sure to test the API endpoints using the provided documentation and video walkthrough to verify the functionality.

This project was developed by [UnfazedAy](https://github.com/UnfazedAy) as part of the AXIA Backend Development Assessment.
