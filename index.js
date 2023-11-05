import express from 'express';
import mongoose from 'mongoose';

const app = express();

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: false,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to DB"))
    .catch((e) => console.log(e));
}



export default connectDB;
