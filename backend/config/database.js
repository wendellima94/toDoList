//Database sao as confs de conexao do   banco de dados
const mongoose = require("mongoose");
const uri = "mongodb+srv://sportinghopy:a1s2d3f4@todolist.detkzxc.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch {
        console.log(error);
    }
}

module.exports = connect

