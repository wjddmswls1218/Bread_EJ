import express from "express";
import path from "path";

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
    res.render("index");
});



app.listen(PORT, (req, res) => {
    console.log(` ${PORT} SEVER START`);
});