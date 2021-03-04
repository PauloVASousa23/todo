const db = require('../db');
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    nome: String,
    cor: String
});

const subTodoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    tags: [tagSchema],
    data: String,
    status: String
});

const todoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    tags: [{nome: String, cor: String}],
    data: String,
    status: String,
    subTodo: [{
        nome: String,
        descricao: String,
        tags: [{nome: String, cor: String}],
        data: String,
        status: String
    }]
});

const todo = mongoose.model('todo', todoSchema);
const tag = mongoose.model('tag', tagSchema);
const subTodo = mongoose.model('subTodo', subTodoSchema);

function cadastrarTodo(nome, descricao){
    
    let novoTodo = new todo({
        nome: nome, 
        descricao: descricao, 
        tags: [], 
        data: Date.now(),
        status : 'Pendente',
        subTodo : []
    });
    
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

function obterTodo(id){
    return todo.findOne({_id: mongoose.Types.ObjectId(id)}).exec();
}

function cadastrarTag(id, nome, cor){
    return todo.findOneAndUpdate({_id: mongoose.Types.ObjectId(id)}, { $push: {tags:{nome: nome, cor: cor}}})
}


module.exports = {
    cadastrarTodo,
    obterTodos,
    obterTodo,
    cadastrarTag
}
