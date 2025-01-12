const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
app.use(cors());
app.use(express.static(path.join(__dirname,'../public')))
// Middleware to parse JSON request bodies
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, world! This is your Express server.');
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
