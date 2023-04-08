import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String },
});

const author = mongoose.model("authors", authorSchema);

export default author;
