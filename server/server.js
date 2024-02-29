const express = require('express');
const mongooseConnect =require("./config/config")
const cors = require('cors');
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongooseConnect()

app.use(express.json());

// Enable CORS 
app.use(cors({
  credentials: true,
  origin: 'https://task-manager-rho-one.vercel.app'
}));
  

// Use routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
