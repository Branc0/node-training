import express from "express";
import BookController from "../controller/books.controller.js";

const router = express.Router();

router.get("/books", BookController.getAllBooks);
router.get("/books/:id", BookController.findBook);
router.post("/books", BookController.addBook);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

export default router;
