const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json())

const connetion = mysql.createConnection(process.env.DATABASE_URL);

app.get('/', (req, res) => {
  console.log('Hello world');
  res.send('Hello world');
});

app.get('/attractions', (req, res) => {
  connetion.query;
  'SELECT * FROM attractions',
    function (err, results, fields) {
      res.send(results);
    };
});

app.listen(process.env.PORT || 3000);