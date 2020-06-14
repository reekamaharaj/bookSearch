const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: false },
    description: {type: String, required: false },
    selfLink: { type: String, required: false },
    image: { type: String, required: false},
    saved: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
