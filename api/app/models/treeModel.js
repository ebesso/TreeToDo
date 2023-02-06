const mongoose = require('mongoose');

const treeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    root: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
});

module.exports = mongoose.model('Tree', treeSchema);