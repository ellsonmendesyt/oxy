const express= require('express');

const router = express.Router();




///importar o model do Usuario

// const Usuario = require('../models/usuario');
const {registrarUsuario,entrar}= require('../controllers/usuarioController');

// // router.post('/cadastro', registrarUsuario)
router.route('/registrar').post(registrarUsuario);
router.route('/entrar').post(entrar);




module.exports=router; 