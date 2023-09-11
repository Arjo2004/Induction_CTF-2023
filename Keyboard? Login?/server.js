const express = require('express')
const path = require('path');
const app = express();

const port = 5005

app.use('/chall2/',express.static('public'))

app.get("/chall2/",(req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port);
console.log('Server started at http://localhost:' + port);
