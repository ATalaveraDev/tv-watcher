const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();

const Serie = mongoose.model('Serie', { title: String, seasons: Number, nextEpisode: Number });

router.post('/', (req, res) => {
  const serie = new Serie({ ...req.body });
  serie.save().then((serieSaved) => res.json(serieSaved));
});

module.exports = router;