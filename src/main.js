import express from 'express';

import { DataBase } from './data-base.js';
import { SeriesAPI } from './routes/series.js';
import { LabelsAPI } from './routes/labels.js';

const db = new DataBase();
const seriesAPI = new SeriesAPI();
const labelsAPI = new LabelsAPI();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/series', seriesAPI.router);
app.use('/labels', labelsAPI.router);

app.listen(port, () => console.log(`App Listening in Port ${port}`));