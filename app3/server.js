//Criamos uma variavel do express
const express = require('express');

const app=express();
const port = 3003;

app.get('/', (req, res) =>{
    res.send('Resposta da API 3 ')
});

app.listen(port, () =>{
    console.log('API 3 escutando a porta ' + port);
});