import mongoose from 'mongoose';
import keys from './keys.js';
import logger from './logger.js';

const { MONGO_URI } = keys;

const connectDB = async () => {
  // Establish a connection to the database
  try {
    const conn = await mongoose.connect(MONGO_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

  } catch (error) {
    logger.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;