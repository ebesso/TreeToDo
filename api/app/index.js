const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const taskRouter = require('./routes/taskRouter')

app.use('/task', taskRouter)

mongoose.connect('mongodb://localhost:27017/TreeTodo').then(() => console.log('Connected to databsase'), (err) => console.log(err));

module.exports = app;