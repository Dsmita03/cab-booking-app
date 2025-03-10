const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());


app.use(express.json());

// Endpoint to save user data
app.post('/bookings', (req, res) => {
  console.log('Request received:', req.body);
  const userData = req.body;

  // Path to the db.json file
  const filePath = path.join(__dirname, 'app', 'db.json');

  // Read existing data in user.json (if any)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading db.json:', err);
      return res.status(500).send('Failed to read db.json');
    }

    let existingData = [];
    if (data) {
      try {
        existingData = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing db.json:', parseErr);
      }
    }

    // Add the new user data to existing data
    existingData.push(userData);

    // Write updated data back to user.json
    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to db.json:', writeErr);
        return res.status(500).send('Failed to save booking data');
      }

      console.log('User data saved successfully');
      res.status(200).send('User data saved successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});