import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";


const app = express();
const path= dirname(fileURLToPath(import.meta.url));


app.use('/chall3', express.static(path + "/public"));

app.get("/chall3/", (req, res) => {
    res.sendFile(path + "/public/index.html");
});


app.get("/chall3/robots.txt", (req, res) => {
    res.sendFile(path + "/public/robots.txt");
});

app.listen(8000, () => console.log("Listening on port 8000"));