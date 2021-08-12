import mongoose from 'mongoose';

export class Serie {
  model;

  constructor() {
    this.model = mongoose.model('Serie', { title: String, seasons: Number, nextEpisode: Number });
  }

  getById(id) {
    return this.model.findById(id, (err, result) => {
      if (!err) {
        return result;
      }
    });
  }

  getAll() {
    return this.model.find({}, (err, results) => {
      if (!err) {
        return results;
      }
    });
  }

  create(data) {
    const serie = new this.model({ ...data });
    
    return serie.save();
  }

  update(id, data) {
    return this.model.findOneAndUpdate({ _id: id }, { ...data }, { new: true });
  }
}