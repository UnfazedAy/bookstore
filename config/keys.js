import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const keys = {
  MONGO_URI: process.env.NODE_ENV === 'development' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD,
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export default keys;