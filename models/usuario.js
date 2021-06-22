const mongoose = require('mongoose');
const conexao = require('../config/database')

const usuarioSchema = new mongoose.Schema({
    nome:{type:String,required:true,}, 
    email:{type:String,required:true,},
    senha:{type:String,required:true,},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = conexao.model("Usuario", usuarioSchema);