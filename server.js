import express from 'express';
import logger from './config/logger.js';
import connectDB from './config/db.js';
import keys from './config/keys.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authorRouter from './routes/authorRoutes.js';
import genreRouter from './routes/genreRoutes.js';
import bookRouter from './routes/bookRoutes.js';
import errorHandler from './middlewares/error.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import colors from 'colors';

const { NODE_ENV } = keys;
connectDB();

const app = express();

// For CORS to be accessible by the client
const corsOptions = {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Mount routers
app.use('/api/v1/authors', authorRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/books', bookRouter);

// Error handler
app.use(errorHandler);

// Log startup message (for local development only)
if (process.env.NODE_ENV !== 'production') {
  logger.info(`Server running in ${NODE_ENV} mode`.yellow.bold);
}

export default app;