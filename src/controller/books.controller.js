import books from "../models/Book.js";

class BookController {
  static getAllBooks = async (req, res) => {
    const booksCollection = await books.find();
    res.status(200).json(booksCollection);
  };

  static addBook = async (req, res) => {
    const book = new books(req.body);
    const dbRes = await book.save();
    if (dbRes.errors) {
      res.status(500).send({ message: `${err.message}` });
    } else {
      res.status(201).send(book.toJSON());
    }
  };
}

export default BookController;
