const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type:String,required: true},
    authors:{ type:Array},
    description:{ type:String},
    thumbnail:{ type:String},
    bookLink:{ type:String, required:true},
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;