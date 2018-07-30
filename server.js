const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome bruh!")
})
app.listen(3500);