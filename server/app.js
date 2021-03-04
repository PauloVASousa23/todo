const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const todo = require('./database/model/todo');

app.get('/', (req, res)=>{
    todo.obterTodos().then(x=>{
        res.json(x);
    });
})

app.post('/tag', (req, res)=>{
    todo.cadastrarTag(req.body.id, req.body.nome, req.body.cor).then(x=>{
        res.json(x);
    });
})

app.get('/:id', (req, res)=>{
    todo.obterTodo(req.params.id).then(x=>{
        res.json(x);
    });
})

app.post('/', (req, res)=>{
    res.json(todo.cadastrarTodo(req.body.nome, req.body.descricao || ''));
})

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000");
})