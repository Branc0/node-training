import express from "express";
import db from "./config/dbConnect.js";

db.on("error", () => {
  console.log.bind(console, "Error while trying to connect into database");
});
db.once("open", () => {
  console.log("database connected ");
});

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "lord of the rings",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  if (req.body) {
    books.push(req.body);
  }
  res.status(201).json(books);
});

export default app;
