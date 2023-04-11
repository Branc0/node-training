import express from 'express';
import BookController from '../controller/books.controller.js';
import sort from '../middlewares/sort.middleware.js';

const router = new express.Router();

router.get('/books', BookController.getAllBooks, sort);
router.get('/books/:id', BookController.findBook);
router.post('/books', BookController.addBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

export default router;
