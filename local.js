import app from './api/server.js';
import keys from './config/keys.js';
import logger from './config/logger.js';

const { PORT, HOST } = keys;

// Start the server locally
const server = app.listen(PORT, () => {
  logger.info(`Server running locally at http://${HOST}:${PORT}`.cyan.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
