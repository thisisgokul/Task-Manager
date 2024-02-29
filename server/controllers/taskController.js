const Task = require('../model/Task');
const { incrementCount } = require('./counterController');

exports.getAllTasks = async (req, res) => {
  try {
    const startTime = Date.now(); // Start time
    const tasks = await Task.find({});
    const executionTime = Date.now() - startTime; // Execution time
    console.log('Execution time for getAllTasks:', executionTime, 'ms');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  const { task } = req.body;
  try {
    const startTime = Date.now(); // Start time
    const createdTask = await Task.create({ task });
    await incrementCount('createTask'); // Increment count for createTask API
    const executionTime = Date.now() - startTime; // Execution time
    console.log('Execution time for createTask:', executionTime, 'ms');
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const startTime = Date.now(); // Start time
    const updatedTask = await Task.findByIdAndUpdate(id, { task }, { new: true });
    await incrementCount('updateTask'); // Increment count for updateTask API
    const executionTime = Date.now() - startTime; // Execution time
    console.log('Execution time for updateTask:', executionTime, 'ms');
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const startTime = Date.now(); // Start time
    await Task.findByIdAndDelete(id);
    const executionTime = Date.now() - startTime; // Execution time
    console.log('Execution time for deleteTask:', executionTime, 'ms');
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
