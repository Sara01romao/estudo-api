

const express = require('express'); 

const app = express(); 

app.listen('3000');

//middleware
app.use(express.json())

//body params
app.route('/').post((req, res) => {
    res.send(req.body)
})

//route  params
app.route('/:nome').get((req, res)=>res.send(req.params.nome));

//query params
app.route('/').get((req,res) => res.send(req.query))