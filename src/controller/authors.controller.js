import NotFoundError from '../Errors/not-found.error.js';
import Authors from '../models/Author.js';

class authorController {
  static getAllAuthors = async (req, res, next) => {
    try {
      const authorsCollection = await Authors.find();
      res.status(200).json(authorsCollection);
    } catch (error) {
      next(error);
    }
  };

  static findAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const author = await Authors.findById(id);
      if (author) {
        res.status(200).send(author);
      } else {
        next(new NotFoundError());
      }
    } catch (error) {
      next(error);
    }
  };

  static addAuthor = async (req, res, next) => {
    try {
      const author = new Authors(req.body);
      const dbRes = await author.save();

      if (dbRes.errors) {
        res.status(500).send({message: `${dbRes.errors.message}`});
      } else {
        res.status(201).send(author.toJSON());
      }
    } catch (error) {
      next(error);
    }
  };

  static updateAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const dbResult = await Authors.findByIdAndUpdate(id, {$set: req.body});
      if (dbResult.errors) {
        res.status(500).send({message: `${dbRes.errors.message}`});
      } else {
        res.status(200).send({message: 'updated successfully'});
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const dbResult = await Authors.findByIdAndDelete(id);
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

export default authorController;
