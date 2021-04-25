const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();

const Serie = mongoose.model('Serie', { title: String, seasons: Number, nextEpisode: Number });

router.post('/', (req, res) => {
  const serie = new Serie({ ...req.body });
  serie.save().then((serieSaved) => res.json(serieSaved));
});

router.get('/', (req, res) => {
  Serie.find({}, (err, results) => res.json(results));
});

router.get('/:id', (req, res) => {
  Serie.findById(req.params.id, (err, result) => res.json(result));
});

router.put('/:id', (req, res) => {
  Serie.updateOne({ _id: req.params.id }, { ...req.body }, (err, result) => res.json(result));
});

module.exports = router;