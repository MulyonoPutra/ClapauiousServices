const express = require('express');
const app = express();

const errorHandler = () => {
  app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
};

module.exports = { errorHandler };
