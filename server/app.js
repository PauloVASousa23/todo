const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const todo = require('./database/model/todo');

app.get('/', (req, res)=>{
    todo.obterTodos().then(x=>{
        res.json(x);
    });
})

app.post('/', (req, res)=>{
    res.json(todo.cadastrarTodo('Check-in Eventos', 'Criar a plataforma Check-in eventos', ['Criar', 'Planejar', 'Codificar']));
})

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000");
})