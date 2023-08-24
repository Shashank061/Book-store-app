const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        rquired: true
    },
    author: {
        type: String,
        rquired: true
    },
    description: {
        type: String,
        rquired: true
    },
    price: {
        type: Number,
        rquired: true
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true,
    },
})


module.exports = mongoose.model("Book", bookSchema);