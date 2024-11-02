import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true, unique: true },
  description: { type: String, required: true, trim: true },
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'Author',  // Reference to Author model
    required: true 
  },
  genre: { 
    type: Schema.Types.ObjectId, 
    ref: 'Genre',   // Reference to Genre model
    required: true 
  },
  publishedDate: { type: Date, default: Date.now },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const Book = model('Book', bookSchema);

export default Book;