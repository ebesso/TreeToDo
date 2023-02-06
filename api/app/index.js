const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const treeRouter = require('./routes/treeRouter')

app.use('/tree', treeRouter)

mongoose.connect('mongodb://localhost:27017/TreeTodo').then(() => console.log('Connected to databsase'), (err) => console.log(err));

module.exports = app;