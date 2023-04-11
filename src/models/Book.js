import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const bookSchema = new mongoose.Schema({
  id: {type: String},
  title: {type: String, required: true},
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
    required: true,
    autopopulate: true,
  },
  editor: {type: String, required: true},
  amountOfPages: {type: Number},
});
bookSchema.plugin(autopopulate);
const books = mongoose.model('books', bookSchema);

export default books;
