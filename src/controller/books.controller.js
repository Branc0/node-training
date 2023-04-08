import books from "../models/Book.js";

class BookController {
  static getAllBooks = async (req, res) => {
    const booksCollection = await books.find();
    res.status(200).json(booksCollection);
  };

  static findBook = async (req, res) => {
    const id = req.params.id;
    const book = await books.findById(id);
    if (!book) {
      res.status(500).send({ message: `${book}` });
    } else {
      res.status(200).send(book);
    }
  };

  static addBook = async (req, res) => {
    const book = new books(req.body);
    const dbRes = await book.save();
    if (dbRes.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(201).send(book.toJSON());
    }
  };

  static updateBook = async (req, res) => {
    const id = req.params.id;
    const dbResult = await books.findByIdAndUpdate(id, { $set: req.body });
    if (dbResult.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(200).send({ message: "updated successfully" });
    }
  };

  static deleteBook = async (req, res) => {
    const id = req.params.id;
    const dbResult = await books.findByIdAndDelete(id);
    if (dbResult.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(200).send({ message: "deleted successfully" });
    }
  };
}

export default BookController;
