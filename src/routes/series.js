import express from 'express';

import { Serie } from '../models/serie.js';

export class SeriesAPI {
  router = express.Router();

  constructor() {
    const model = new Serie(); 

    this.router.get('/', (req, res) => model.getAll().then((results) => res.json(results)));
    this.router.post('/', (req, res) => model.create(req.body).then((serie) => res.json(serie)));

    this.router.get('/:id', (req, res) => model.getById(req.params.id).then(result => res.json(result)));
    this.router.put('/:id', (req, res) => model.update(req.params.id, req.body).then(result => res.json(result)));
  }
}