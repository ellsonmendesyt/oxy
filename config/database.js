const mongoose= require('mongoose');
const dbname= 'oxydb';



try{

      const conexao = mongoose.createConnection(`mongodb://localhost:27017/${dbname}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        },()=>{
          console.log('✨✨ conectado ao DB ✨✨')
        });


      conexao.on('error', (error)=>{
        console.log(error)
      })
      module.exports = conexao;

}catch(erro){
      console.log(erro)
}



























// const conectar=()=>{
//  mongoose.connect(`mongodb://localhost:27017/${dbname}`,{
//      useNewUrlParser:true,
//      useUnifiedTopology:true,
//      useCreateIndex:true
//  }).then((con)=>{
// //    console.log(`Conectado  como o host: ${con.connection.host}`)
//   console.log('✨✨ DB conectado ✨✨')
//  })
//  .catch((erro)=>{console.log(erro)})

// }

// module.exports=conectar;