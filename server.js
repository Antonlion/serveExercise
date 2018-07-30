const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome potato!")
})
app.listen(3500);