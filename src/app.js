import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on("error", () => {
  console.log.bind(console, "Error while trying to connect into database");
});
db.once("open", () => {
  console.log("database connected ");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/books", async (req, res) => {
  const booksColection = await books.find();
  res.status(200).json(booksColection);
});

app.post("/books", (req, res) => {
  res.status(201).json(books);
});

export default app;
