const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },

    isRoot: {
        type: Boolean,
        required: true
    },

    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },

    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]

});


module.exports = mongoose.model('Task', taskSchema);