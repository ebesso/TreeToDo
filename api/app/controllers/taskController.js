var TaskService = require('../services/taskService');


exports.toggleComplete = async (req, res) => {
    const task = await TaskService.ToggleComplete(req);
    res.send(task);
}

exports.findRoots = async (req, res) => {
    const roots = await TaskService.FindRoots();
    res.send(roots);
}

exports.find = async (req, res) => {
    const task = await TaskService.Find(req);
    res.send(task)
}

exports.create = async (req, res) => {
    const task = await TaskService.Create(req);
    res.send(task);
}

exports.delete = async (req, res) => {
    const success = await TaskService.Delete(req);
    if (success){
        res.send(true)
    }
    else{
        res.send(false);
    }
}