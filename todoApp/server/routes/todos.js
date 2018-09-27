const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://daca:asdlkj1@ds115963.mlab.com:15963/meantodos', ['todos'])

//Get Todos
router.get('/todos', (req, res, next) => {
    db.todos.find((err, todos) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(todos);
        }
    });
});

//Get Single Todo
router.get('/todo/:id', (req, res, next) => {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    },(err, todo) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(todo);
        }
    });
});

//Add Todo
router.post('/todo', (req, res, next) => {
    const todo = req.body;
    if(!todo.text || (!todo.isCompleted + '')){
        res.status(400);
        res.json({
            "err": "Invalid Data"
        });
    }
    else{
        db.save(todo, (err, result) => {
            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });
    }
});

//Update Todo
router.put('/todo/:id', (req, res, next) => {
    const todo = req.body;
    const updObj = {};

    if(todo.isCompleted){
        updObj.isCompleted = todo.isCompleted;
    }

    if(todo.text){
        updObj.text = todo.text;
    }

    if(!updObj){
        res.status(400);
        res.json({
            "err": "Invalid Data"
        })
    }
    else{
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, (err, result) => {
            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        }); 
    }
});

//Delete Todo
router.delete('/todo/:id', (req, res, next) => {
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, updObj, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(result);
        }
    }); 
});

module.exports = router;