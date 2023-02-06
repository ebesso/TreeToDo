const Tree = require('../models/treeModel');

const TreeService = {
    FindAll: async () => {
        const trees = await Tree.find(); 
        return trees;
    },

    FindById: async (req) => {
        const tree = Tree.findById(req.query.id);
        return tree;
    },

    Create: async (req) => {
        const tree = new Tree({
            name: req.body.name,
        });

        await tree.save();

        return tree;
    },

    Delete: async (req) => {
        await Tree.findByIdAndDelete(req.query.id);
    }
}

module.exports = TreeService;
