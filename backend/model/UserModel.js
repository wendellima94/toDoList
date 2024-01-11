const mongoose = require("mongoose"); //importando o mongoose, que gerencia as models no mongodb
const Schema = mongoose.Schema; //usar Schema como padrao

const userSchema = new Schema({
    name: {
        type: String, //usar sempre letra maiuscula no tipo 
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema); //serve pra exportar a Model
