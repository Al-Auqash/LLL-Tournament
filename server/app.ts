import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import database from './config/database';
import bodyParser from 'body-parser';
import path from 'path';

import api from './routes/index';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database
database();

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

// routers call
app.use('/api', api);

export default app;
