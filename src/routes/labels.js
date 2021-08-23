import express from 'express';

import { Label } from '../models/label.js';

export class LabelsAPI {
  router = express.Router();

  constructor() {
    const model = new Label(); 

    this.router.get('/', (req, res) => model.getAll().then((results) => res.json(results)));
    this.router.post('/', (req, res) => model.create(req.body).then((label) => res.json(label)));

    this.router.get('/:slug', (req, res) => model.getBySlug(req.params.slug).then(result => res.json(result)));
    this.router.put('/:slug', (req, res) => model.update(req.params.slug, req.body).then(result => res.json(result)));
  }
}
