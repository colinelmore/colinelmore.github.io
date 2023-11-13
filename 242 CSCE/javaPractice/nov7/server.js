const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const upload = multer({dest: __dirname + "/public/images"});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/recipes", (req, res) => {
    res.send(recipes);
});

app.listen(3000, () => {
    console.log("im listening");
});