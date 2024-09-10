const express = require('express');
const bodyParser = require('body-parser');
const { createTodo, updateTodo } = require('./zod');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    // verify input, by zod
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'you send wrong input',
        });
        return;
    }
    // put it into mongoDB

});

app.put('/todos', (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'you have sent wrong input',
        })
    }
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})