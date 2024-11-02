import { Schema, model } from 'mongoose';

const genreSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'Description cannot be more than 100 characters']
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Virtual populate Books for Genre, a genre can have many books
genreSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'genre',
  justOne: false,
});

// validate description length, It should not be more than 100 characters
genreSchema.pre('validate', function (next) {
  if (this.description.length > 100) {
    return next(new Error('Description cannot be more than 100 characters'));
  }
  next();
});

const Genre = model('Genre', genreSchema);

export default Genre;
