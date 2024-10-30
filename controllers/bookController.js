import Book from '../models/Book.js';
import Genre from '../models/Genre.js';
import Author from '../models/Author.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../helpers/errorResponse.js';
import logger from '../config/logger.js';

// @ desc Create a book
// @ route POST /api/v1/books
const createBook = asyncHandler(async (req, res, next) => {
  const { title, author, genre, description } = req.body;
  if (!title || !author || !genre || !description) {
    return next(
      new ErrorResponse('Title, author, genre and description are required', 400)
    );
  }
  const book = await Book.create({ title, author, genre, description });
  res.status(201).json({
    success: true,
    data: book,
    message: 'Book created successfully',
  });
});

// @desc Get all books
// @route GET /api/v1/books
const getBooks = asyncHandler(async (req, res, next) => {
  try {
    const { author, genre } = req.query;
    const filter = {};

    // Check if author name exists in the query, gets the author ID and assign it to the filter object
    if (author) {
      const authorExists = await Author.findOne({ name: author });
      if (!authorExists) {
        return next(new ErrorResponse('Author not found', 404));
      }
      filter.author = authorExists._id;
    }

    // Check if genre name exists in the query, gets the genre ID and assign it to the filter object
    if (genre) {
      const genreExists = await Genre.findOne({ name: genre });
      if (!genreExists) {
        return next(new ErrorResponse('Genre not found', 404));
      }
      filter.genre = genreExists._id;
    }

    const books = await Book.find(filter).populate('author genre');
    if (!books) {
      return next(new ErrorResponse('No books found', 404));
    }
    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
      message: 'Books retrieved successfully',
    });
  } catch (error) {
    next(error);
    logger.error('Failed to retrieve books', error);
  }
});

// @desc Update a book
// @route POST /api/v1/books/:id
const updateBook = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(
    id, { title, description }, { new: true, runValidators: true }
  );
  if (!book) {
    return next(new ErrorResponse('Book not found', 404));
  }
  res.status(200).json({
    success: true,
    data: book,
    message: 'Book updated successfully',
  });
});

// @desc Delete a book
// @route DELETE /api/v1/books/:id
const deleteBook = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findByIdAndDelete(id);
  if (!book) {
    return next(new ErrorResponse('Book not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
  });
});

// @desc Get a single book
// @route GET /api/v1/books/:id
const getBook = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findById(id).populate('author genre');
  if (!book) {
    return next(new ErrorResponse('Book not found', 404));
  }
  res.status(200).json({
    success: true,
    data: book,
    message: 'Book retrieved successfully',
  });
});

export {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getBook,
};