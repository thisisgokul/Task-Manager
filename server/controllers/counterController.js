const ApiCounter = require('../model/apiCounter'); 


exports.incrementCount = async function(apiName) {
  try {
    let countDoc = await ApiCounter.findOne({}); // Finding the count document

    // If no document exists, create a new one with initial counts
    if (!countDoc) {
      countDoc = new ApiCounter({ addCount: 0, updateCount: 0 });
    }

    // Increment 'addCount' if API is for creating task
    if (apiName === 'createTask') {
      countDoc.addCount += 1;
    } 
    // Increment 'updateCount' if API is for updating task
    else if (apiName === 'updateTask') {
      countDoc.updateCount += 1;
    }

    await countDoc.save(); 
  } 
  catch (error) {
    console.error('Error incrementing count:', error);
  }
};


exports.getAllCounters = async (req, res) => {
    try {
      const counters = await ApiCounter.findOne({}); // Finding the count document
      // Extracting only the required properties
      const { addCount, updateCount } = counters || { addCount: 0, updateCount: 0 };
      // Sending only the required properties as JSON response
      res.json({ addCount, updateCount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  