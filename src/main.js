import { DataBase } from './data-base.js';
import { SeriesAPI } from './routes/series.js';
import express from 'express';

const db = new DataBase();
const seriesAPI = new SeriesAPI();


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/series', seriesAPI.router);

app.listen(port, () => console.log(`App Listening in Port ${port}`));