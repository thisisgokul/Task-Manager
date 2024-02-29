const mongoose = require('mongoose');

const apiCounterSchema = new mongoose.Schema({
  addCount: {
    type: Number,
    default: 0 // Initialize add count to 0
  },
  updateCount: {
    type: Number,
    default: 0 // Initialize update count to 0
  }
});

const ApiCounter = mongoose.model('ApiCounter', apiCounterSchema);

module.exports = ApiCounter;
