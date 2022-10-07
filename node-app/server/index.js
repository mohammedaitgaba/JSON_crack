// server/index.js

const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/:userId", (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'json_crack'
    })

    connection.connect()

    connection.query(`SELECT * FROM json_files WHERE owner = ${req.params.userId}`, (err, rows) => {
    if (err) throw err

    return res.send(rows);
    })

    connection.end()
  });

// app.get('/getData', (req, res) => {
    
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



