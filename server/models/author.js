// require('../config/mongoose');
const mongoose = require('mongoose');

module.exports = (() => {
    const AuthourSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: [3, "Author's name should be more than 3 characters"]
        }
    }, { timestamps: true });    
    
    mongoose.model('Autour', AuthourSchema);
})();


