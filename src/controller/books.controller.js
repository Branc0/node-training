import Books from '../models/Book.js';

class BookController {
  static getAllBooks = async (req, res, next) => {
    try {
      const title = req.query.title;
      let booksCollection;
      if (title) {
        booksCollection = await Books.find({title}).populate('author');
      } else {
        booksCollection = await Books.find().populate('author');
      }
      res.status(200).json(booksCollection);
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

export default BookController;
