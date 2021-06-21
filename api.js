
const express  = require('express');
const config=require ('dotenv').config();

const app = express();

//console.log(config.parsed.PORT)










//midleware
const validar= (req,res,next)=>{
   req.usuario="elson";
   next();
}



//gerenciador de rotas
app.get('/',(req,res)=>{
  if(req.usuario) return res.status(200).json({msg:req.usuario});
//   res.status(200).json({res:'ok'})
else return res.json({"msg":"Erro"})
})




app.listen(process.env.PORT,()=>{
    console.log('servidor ativo')
})