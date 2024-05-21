const express = require('express');
const db = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  db.select('*').from('some_table') // Replace 'some_table' with your table name
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
