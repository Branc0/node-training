import express from "express";
import books from "./books.routes.js";

const routes = (app) => {
  app.route("/", (req, res) => {
    res.status(200).send({ title: "node course" });
  });

  app.use(express.json(), books);
};

export default routes;
