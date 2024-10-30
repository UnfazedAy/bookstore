import Author from '../models/Author.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../helpers/errorResponse.js';
import logger from '../config/logger.js';

const createAuthor = asyncHandler(async (req, res, next) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    return next(new ErrorResponse('Name, bio and description are required', 400));
  }
  try {
    const author = await Author.create({ name, bio });
    res.status(201).json({
      success: true,
      data: author,
      message: 'Author created successfully',
    });
  } catch (error) {
    next(error);
    logger.error('Failed to create author', error);
  }
});

export { createAuthor };