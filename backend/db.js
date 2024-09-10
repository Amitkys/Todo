const mongoose = require('mongoose');

async function main(){
    try{
        await mongoose.connect('mongodb://localhost:27017/todo');
        console.log('connected to database');
    }catch(err){
        console.error(err);
    }
}















main();