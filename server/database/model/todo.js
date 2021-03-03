const db = require('../db');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    tags: [String],
    data: String
});

const todo = mongoose.model('todo', todoSchema);

function cadastrarTodo(nome, descricao, tags){
    
    let novoTodo = new todo({nome: nome, descricao: descricao, tags: tags});
    
    novoTodo.save((err, t)=>{
        if(err){
            return err;
        }else{
            return t
        }
    });

}

function obterTodos(){
    return todo.find().exec();
}


module.exports = {
    cadastrarTodo,
    obterTodos
}
