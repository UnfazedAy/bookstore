/* eslint-disable @typescript-eslint/no-unused-vars */
import ErrorResponse from '../helpers/errorResponse.js';
import logger from '../config/logger.js';

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
    
  logger.error(err.stack.red);
    
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = Object.keys(err.keyValue).map(
      (key) => `Duplicate key error, ${key} already exists`);
    error = new ErrorResponse(message, 400);
  }
    
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
    
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

export default errorHandler;
