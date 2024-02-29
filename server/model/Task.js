
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
},{ collection: 'taskData' });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
