const express = require("express");

const bodyParser = require("body-parser");
const app = express()
const Memes = []
app.use(bodyParser.urlencoded({ extended:false }))
app.set("view engine","ejs")
app.set("views", "views")

app.get("/",(req,res,next) => {
    const hello = "MOTHER YUCKER"
    res.render("index",{hello:hello})
})

app.get("/add-meme",(req,res,next) => {
    res.render("memeform")
})

app.post("/memes", (req,res) => {
    console.log(req.body)
    const newMemeData = req.body;
    Memes.push(newMemeData)
    res.redirect("/")
})

app.listen(3000);