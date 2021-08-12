import fs from 'fs';
import mongoose  from 'mongoose';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export class DataBase {

  constructor() {
    let rawData = fs.readFileSync(`${dirname(fileURLToPath(import.meta.url))}/config/config.json`);
    let data = JSON.parse(rawData);

    mongoose.connect(`mongodb+srv://${data.DB.user}:${data.DB.password}@tvwatchercluster.37kpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'We are live!!'));
  }
}