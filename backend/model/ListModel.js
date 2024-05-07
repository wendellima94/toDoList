const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    typeList: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = mongoose.model('List', listSchema ); 