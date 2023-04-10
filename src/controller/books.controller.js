import Books from '../models/Book.js';
import Authors from '../models/Author.js';
import NotFoundError from '../Errors/not-found.error.js';

class BookController {
  static getAllBooks = async (req, res, next) => {
    try {
      const search = await populateSearch(req.query);

      if (search.author === null) {
        res.status(200).send([]);
      } else {
        const booksCollection = await Books.find(search).populate('author');
        res.status(200).json(booksCollection);
      }
    } catch (error) {
      next(error);
    }
  };

  static findBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const book = await Books.findById(id).populate('author', 'name');
      if (book) {
        res.status(200).send(book);
      } else {
        next(new NotFoundError());
      }
    } catch (error) {
      next(error);
    }
  };

  static addBook = async (req, res, next) => {
    try {
      const book = new Books(req.body);
      const dbRes = await book.save();
      if (dbRes.errors) {
        res.status(500).send({message: `${dbRes.errors.message}`});
      } else {
        res.status(201).send(book.toJSON());
      }
    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const dbResult = await Books.findByIdAndUpdate(id, {$set: req.body});
      if (!dbResult) {
        res.status(500).send({message: `${dbRes}`});
      } else {
        res.status(200).send({message: 'updated successfully'});
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const dbResult = await Books.findByIdAndDelete(id);
      if (dbResult.errors) {
        res.status(500).send({message: `${dbRes.errors.message}`});
      } else {
        res.status(200).send({message: 'deleted successfully'});
      }
    } catch (error) {
      next(error);
    }
  };
}

async function populateSearch({title, editor, author}) {
  const search = {};
  if (title) search.title = {$regex: title, $options: 'i'};
  if (editor) search.editor = {$regex: editor, $options: 'i'};
  if (author) {
    const resAuthor = await Authors.findOne({name: author});
    search.author = resAuthor?._id ?? null;
  }
  return search;
}

export default BookController;
