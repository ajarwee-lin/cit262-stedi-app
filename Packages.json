const express = require('express');
const app = express();
const port = 3000;

// Define a sample API endpoint
app.get('/api/info', (req, res) => {
  const info = {
    message: 'This is a simple Frontend API',
    version: '1.0.0'
  });
  res.json(info);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```