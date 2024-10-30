import Genre from '../models/Genre.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../helpers/errorResponse.js';

// Create a genre
// POST /api/v1/genres
const createGenre = asyncHandler(async (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return next(new ErrorResponse('Name and description are required', 400));
  }
  const genre = await Genre.create({ name, description });
  res.status(201).json({
    success: true,
    data: genre,
    message: 'Genre created successfully',
  });
});

export { createGenre };
