import express from "express";
const port = 8080;
import bodyParser from 'body-parser';
import cors from 'cors';
import moment from 'moment';
import dotenv from 'dotenv';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: Infinity }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: Infinity}));
app.use(bodyParser.json({limit: Infinity}));

const api: express.Router = express.Router();

api.use((req, res, next) => {
    console.log(moment().format('YYYY/MM/DD HH:mm:ss'), 'Route: ', req.url);
    next();
});

process.on('uncaughtException', (e) => {
    console.log(moment().format('YYYY/MM/DD HH:mm:ss'), 'Uncaught Exception: ', e.stack || e);
});

api.get("/", (req: any, res: any) => {
    res.send("hello");
});

import {
    AuthController
} from './controllers';

api.use('/auth', AuthController);

app.use('/api', api);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});


