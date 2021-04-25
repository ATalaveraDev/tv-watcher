const fs = require('fs');
let rawData = fs.readFileSync(`${__dirname}/config/config.json`);
let data = JSON.parse(rawData);

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${data.DB.user}:${data.DB.password}@tvwatchercluster.37kpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We are live!!')
});