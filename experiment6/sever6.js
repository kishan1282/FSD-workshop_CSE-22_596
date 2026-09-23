const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile("index6.html", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    });
});

app.get("/about", (req, res) => {
    fs.readFile("about.html", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    });
});

app.get("/contact", (req, res) => {
    fs.readFile("contact.html", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});