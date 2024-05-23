// index.js
const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  //console.table(db);
});

