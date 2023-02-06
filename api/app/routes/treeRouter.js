const express = require('express')
const tree = require('../controllers/treeController');

const router = express.Router();


router.get('/all', tree.findAll);
router.get('/find', tree.findById);
router.post('/create', tree.create);
router.delete('/delete', tree.delete);

module.exports = router;