var TreeService = require('../services/treeService');

exports.findAll = async (req, res) => {
    const trees = await TreeService.FindAll();
    res.send(trees);
}

exports.findById = async (req, res) => {
    const tree = await TreeService.FindById(req);
    res.send(tree);
}

exports.create = async (req, res) => {
    const tree = await TreeService.Create(req);
    res.send(tree);
}

exports.delete = async (req, res) => {
    await TreeService.Delete(req);
}