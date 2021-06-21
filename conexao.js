
const mongoose= require('mongoose')


module.exports=mongoose.connect('mongodb://localhost/oxydb',{
     useNewUrlParser: true,
     useUnifiedTopology: true 
    } )

mongoose.connection.once('open',()=>{
    console.log('======= oxydb ===========')
}).on('error',(erro)=>{
    console.log('xxxxxxxxxxxx');
  console.log(erro);
})


