const taskModel = require('../models/taskModel');
const Task = require('../models/taskModel');


const TaskService = {

    ToggleComplete: async (req) => {
        const task = await Task.findById(req.query.id);

        if(task.isCompleted){
            task.isCompleted = false;
            await task.save();
            return task;
        }
        
        task.isCompleted = true
        task.save();

        q = []

        q.push(...task.children);

        while (q.length > 0){
            var taskId = q.pop();
            const task = await Task.findByIdAndUpdate(taskId, {isCompleted: true});
            await task.save();
            q.push(...task.children)
        }
        return task;
    },

    FindRoots: async () => {
        const tasks = await Task.find({isRoot: true});
        return tasks;
    },

    Find: async (req) => {
        const task = await Task.findById(req.query.id).populate('children');
        return task
    },

    Delete: async (req) => {
        const task = await Task.findById(req.query.id);
        if (task.subTasks.length > 0){
            return false;
        }else{
            await Task.findByIdAndDelete(req.query.id);
            return true;
        }
    },
    
    Create: async (req) => {
        const parentId = req.query.parentId;

        if(parentId){

            const parent = await Task.findById(parentId);

            const child = new Task({
                name: req.body.name,
                isRoot: false,
                parent: parent._id
            })

            await child.save();

            parent.children.push(child);

            await parent.save();
    
            return parent;
        }
        else{
            const task = new Task({
                name: req.body.name,
                isRoot: true
            });

            await task.save();

            return task
        }
    }
}

module.exports = TaskService;