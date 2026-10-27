const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary server-side storage
let submissions = [];

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, age } = req.body;

  // Server-side validation
  if (!name || !email || !age || age < 1) {
    return res.send('Error: Invalid form submission. Please fill all fields correctly.');
  }

  // Store data
  submissions.push({ name, email, age });

  // Send success message
  res.send(`<h3>Form submitted successfully!</h3><p>Thank you, ${name}.</p>`);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));