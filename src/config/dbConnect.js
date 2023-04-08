import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://rrochadeazevedo:123@cluster0.lxserh9.mongodb.net/node-library"
);

const db = mongoose.connection;

export default db;
