import { Schema, model } from 'mongoose';

const AuthorSchema = new Schema({
  name: { type: String, required: true, trim: true },
  bio: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'Bio cannot be more than 100 characters'],
  },
}, { timestamps: true });

// Virtual populate Books for Author, an author can have many books
AuthorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author',
  justOne: false,
});

// validate bio length, It should not be more than 100 characters
AuthorSchema.pre('validate', function (next) {
  if (this.bio.length > 100) {
    return next(new Error('Bio cannot be more than 100 characters'));
  }
  next();
});

const Author = model('Author', AuthorSchema);

export default Author;
