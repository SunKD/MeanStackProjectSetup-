// require('../config/mongoose');
const mongoose = require('mongoose');

module.exports = (() => {

    const QuoteSchema = new mongoose.Schema({
        quote: {
            type: String,
            required: true,
            min: [3, "Quote should be more than 3 characters"]
        },
        vote: {
            type: Number,
            default: 0
        }
    }, { timestamps: true });


    const AuthorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: [3, "Author's name should be more than 3 characters"]
        }, quotes: [QuoteSchema]
    }, { timestamps: true });

    mongoose.model('Author', AuthorSchema);
    mongoose.model('Quote', QuoteSchema);
})();


