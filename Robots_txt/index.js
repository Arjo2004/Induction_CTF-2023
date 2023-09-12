import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";


const app = express();
const path= dirname(fileURLToPath(import.meta.url));


app.use(express.static(path + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path + "/views/index.html");
});


app.get("/robots.txt", (req, res) => {
    res.sendFile(path + "/robots.txt");
});

app.listen(8000, () => console.log("Listening on port 8000"));