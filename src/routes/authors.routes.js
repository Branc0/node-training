import express from 'express';
import AuthorController from '../controller/authors.controller.js';

const router = new express.Router();

router.get('/authors', AuthorController.getAllAuthors);
router.get('/authors/:id', AuthorController.findAuthor);
router.post('/authors', AuthorController.addAuthor);
router.put('/authors/:id', AuthorController.updateAuthor);
router.delete('/authors/:id', AuthorController.deleteAuthor);

export default router;
