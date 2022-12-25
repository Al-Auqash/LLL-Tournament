import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

const database = async () => {
  const uri = process.env.DATABASE_URL;
  // @ts-ignore
  mongoose.connect(uri);
  const connection = await mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
};

export default database;
