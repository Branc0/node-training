import books from "../models/Book.js";

class BookController {
  static getAllBooks = async (req, res) => {
    const booksCollection = await books.find();
    res.status(200).json(booksCollection);
  };
}

export default BookController;
