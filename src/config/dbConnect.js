import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://rrochadeazevedo:123@cluster0.lxserh9.mongodb.net"
);

const db = mongoose.connection;

export default db;
