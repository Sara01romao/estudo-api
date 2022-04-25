
//Criação do serve
const express = require('express'); //add o modulo no arquivo

const app = express(); //express constante inicializado

app.listen('3000');//fica ouvindo e usa a porta definida. Executa no teminal com node index.js ou node .
//


//função para rotas. Primeiro argumento ROTA depois metodo (requis e respo)
/* app.route('/').get((req, res)=>res.send("Hello")); 
 */

//middleware - ponte entre o codigo e o insomnia
app.use(express.json())//transforma em json

app.route('/post').post((req, res)=>res.send(req.body))


let author = "sara";

app.route('/').get((req, res) => res.send(author))

//put recebe e edita
app.route('/').put((req, res)=>{
    author = req.body.author;
    res.send(author)
})


//delete
app.route('/:id').delete((req,res) => {
   
    res.send(req.params.id)
})