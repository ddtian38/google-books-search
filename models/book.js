const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    synopsis: {
        type: String,
        default: "No summary avaiable"
    },

    viewLink:{
        type: String,
        required: true
    },

    imageLink:{
        type: String,
        default: "https://via.placeholder.com/150"
    },

    saved:{
        type: Boolean,
        required: true,
        default: true
    },
    
    date: { 
        type: Date, 
        default: Date.now 
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;