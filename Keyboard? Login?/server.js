const express = require('express')
const path = require('path');
const app = express();

const port = 5000

app.use(express.static('public'))

app.get("/",(req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

app.get("/login.js",(req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '/login.js'));
})

app.get("/flag-bits-floof.html",(req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '/flag-bits-floof.html'));
})


app.listen(port);
console.log('Server started at http://localhost:' + port);
