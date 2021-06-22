
const express  = require('express');
const config=require ('dotenv').config();
const app = express();
app.use(express.json())
const conexao = require('./config/database')




const Usuario = require('./models/usuario');

app.use(require('./rotas/auth'))














app.listen(process.env.PORT,()=>{
    console.log('servidor ativo')
})