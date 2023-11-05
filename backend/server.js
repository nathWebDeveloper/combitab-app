//Adaptar a Typescript: const express = require('express');
//Adaptación:
import express from 'express';
const app = express();

const appcombis = require('./routes/appCombis');
const connectDB = require('..');
require('dotenv').config();

//pendiente
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/appCombis', appcombis);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();