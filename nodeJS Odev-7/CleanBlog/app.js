const express = require("express")
const ejs = require("ejs")

const app = express()

// Template Engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/post", (req, res) => {
    res.render("post")
})
app.get("/add_post", (req, res) => {
    res.render("add_post")
})


const PORT = 4000

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Başladı...`);
})