import express, { Router } from 'express';

import cors from 'cors';

import connection from './database/db.js';

import bodyParser from 'body-parser';
 
import Route from './routes/route.js';
const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/', Route);

connection();

const PORT = 8000;

app.listen(PORT, () => console.log('Server is runnning succesfully ${PORT}'))

