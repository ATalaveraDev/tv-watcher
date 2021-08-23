import { Mongoose } from "mongoose";

export class Label {
  model;

  constructor() {
    this.model = Mongoose.model('Label', { name: String, slug: String });
  }

  getBySlug(slug) {
    return this.model.find({ slug }, (err, results) => !err ? results : err);
  }

  getAll() {
    return this.model.find({}, (err, results) => !err ? results : err);
  }

  create(data) {
    const label = new this.model({ ...data });

    return label.save();
  }

  update(slug, data) {
    return this.model.findOneAndUpdate({ slug }, { ...data }, { new: true });
  }
}
