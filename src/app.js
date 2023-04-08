import express from "express";

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
