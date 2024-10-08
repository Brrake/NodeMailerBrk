// logger.js
const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Log only if info level or higher
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Write logs to console
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    // Write logs to a file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// If we're not in production then log to the `console` with the format: 
// color and simple
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
