const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// GET route (Render form)
app.get('/', (req, res) => {
  res.render('index', { name: null });
});

// POST route (Handle form submission)
app.post('/submit', (req, res) => {
  const userName = req.body.username;
  res.render('index', { name: userName });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});