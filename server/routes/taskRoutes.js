
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const counterController = require('../controllers/counterController');

router.get('/tasks', taskController.getAllTasks);
router.get('/counter', counterController.getAllCounters);
router.post('/create-tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
