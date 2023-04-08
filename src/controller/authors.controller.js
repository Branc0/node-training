import authors from "../models/Author.js";

class authorController {
  static getAllAuthors = async (req, res) => {
    const authorsCollection = await authors.find();
    res.status(200).json(authorsCollection);
  };

  static findAuthor = async (req, res) => {
    const id = req.params.id;
    const author = await authors.findById(id);
    if (!author) {
      res.status(500).send({ message: `${author}` });
    } else {
      res.status(200).send(author);
    }
  };

  static addAuthor = async (req, res) => {
    const author = new authors(req.body);
    const dbRes = await author.save();
    if (dbRes.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(201).send(author.toJSON());
    }
  };

  static updateAuthor = async (req, res) => {
    const id = req.params.id;
    const dbResult = await authors.findByIdAndUpdate(id, { $set: req.body });
    if (dbResult.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(200).send({ message: "updated successfully" });
    }
  };

  static deleteAuthor = async (req, res) => {
    const id = req.params.id;
    const dbResult = await authors.findByIdAndDelete(id);
    if (dbResult.errors) {
      res.status(500).send({ message: `${dbRes.errors.message}` });
    } else {
      res.status(200).send({ message: "deleted successfully" });
    }
  };
}

export default authorController;
