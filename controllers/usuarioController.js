const Usuario =require('../models/usuario');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req,res, next)=>{
    const {nome,email,senha}=req.body;
  //verifica se veio todos os campos
  if(!nome || !email || !senha) res.status(422).json({error:"Preencha todos os campos"})

 
  try{
     //so poderar registrar um conta por email
      const usuarioSalvo=await Usuario.findOne({email:email});

      if(usuarioSalvo){
          return res.status(422).json({erro:"Já existe um usuario com esse email"});
      }

        //criptografar a senha
        const senhasegura =await bcrypt.hash(senha,10)
        
        
        //const novousuario = await new Usuario({nome,email,senha});
        const novousuario = await Usuario.create({nome,email,senha:senhasegura})  
        
        await novousuario.save();
        res.json({msg:'usuario cadastrado com sucesso'})
    
  }catch(erro){
      console.log(erro)
  }
  
}



exports.entrar=async (req,res)=>{
    const {email,senha}=req.body;
    console.log(senha)

    if(!email || !senha){return res.status(422).json({erro: "informe a senha e email"})}


   try{
    const usuarioSalvo = await Usuario.findOne({email:email})
    if(!usuarioSalvo){
        return res.status(422).json({erro:"usuario nao encontrado"})
    }

    bcrypt.compare(senha,usuarioSalvo.senha, (erro, coincidem)=>{
        if(coincidem){
            return res.json({msg:"logado com sucesso bro!"})
        }else{
            return res.status(422).json({erro:"Email e/ou senha invaldios"})
        }
    })
    
   //res.json({msg:"conectado com sucesso"})
   }catch(erro){
    console.log(erro)
   }
  
}


