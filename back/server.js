import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';

import {authRouter, listsRouter, moviesRouter} from './routes/index.js';

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('db was connected'))
    .catch((err) => console.error('Something went wrong with db connection', err));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello");
});

app.use('/auth', authRouter);
app.use('/lists', listsRouter);
app.use('/movies', moviesRouter);

app.listen(4444, () => console.log("server is listening on port 3000..."));

