const express = require('express');
const app = express();

// Define Routes
app.use('/', require('./routes/reports'));
app.use('/', require('./routes/report'));

app.get('/tester', (req, res) => {
  res.send(`<h1>Server is running on port ${PORT}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
