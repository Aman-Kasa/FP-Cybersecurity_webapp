const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

module.exports = app;