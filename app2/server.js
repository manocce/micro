//Criamos uma variavel do express
const express = require('express');

const app=express();
const port = 3002;

app.get('/', (req, res) =>{
    res.send('Resposta da API 2 ')
});

app.listen(port, () =>{
    console.log('API 2 escutando a porta ' + port);
});