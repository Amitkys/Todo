const mongoose = require('mongoose');
const { boolean } = require('zod');

async function main(){
    try{
        await mongoose.connect('mongodb://localhost:27017/todo');
        console.log('connected to database');
    }catch(err){
        console.error(err);
    }
}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}















main();