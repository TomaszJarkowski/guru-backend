import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import productsRouter from './routes/productsRouter';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// set up routes
app.use('/', productsRouter);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`The server has started on port ${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
    res.send({
        text: 'Welcome in guru shop'
    });
});

mongoose.connect(
    process.env.DB_CONNECT as string,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true
    },
    (err) => {
        if (err) throw err;
        console.log('MongoDB connection established');
    }
);
