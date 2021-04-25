require('./data-base');

const seriesRoutes = require('./routes/series');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/series', seriesRoutes);

app.listen(port, () => console.log(`App Listening in Port ${port}`));