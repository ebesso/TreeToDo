const express = require('express')
const task = require('../controllers/taskController');

const router = express.Router();


router.get('/roots', task.findRoots);
router.get('/find', task.find);
router.patch('/complete', task.toggleComplete);
router.post('/create', task.create);
router.delete('/delete', task.delete);

module.exports = router;