// require('../config/mongoose');
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

module.exports = (() => {

    const QuoteSchema = new mongoose.Schema({
        quote: {
            type: String,
            required: [true, "Quote is required"],
            min: [3, "Quote should be more than 3 characters"],
        },
        vote: {
            type: Number,
            default: 0
        }
    }, { timestamps: true });


    const AuthorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Author name required"],
            min: [3, "Author's name should be more than 3 characters"],
            unique: [true, 'This name already exists'], // Use 'mongoose-unique-validator'
            dropDups: true
        }, quotes: [QuoteSchema]
    }, { timestamps: true });

    AuthorSchema.plugin(uniqueValidator, { message: 'The {PATH} {VALUE} already exists.' });
    mongoose.model('Author', AuthorSchema);
    mongoose.model('Quote', QuoteSchema);
})();


