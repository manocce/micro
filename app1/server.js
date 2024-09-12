//Criamos uma variavel do express
const express = require('express');

const app=express();
const port = 3001;

app.get('/', (req, res) =>{
    res.send('Resposta da API 1 ')
});

app.listen(port, () =>{
    console.log('API 1 escutando a porta ' + port);
});