const express = require("express");

const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.set("view engine","ejs")
app.set("views", "views")

app.get("/",(req,res,next) => {
    const hello = "MOTHER YUCKER"
    res.render("index",{hello:hello})
})

app.listen(3000);