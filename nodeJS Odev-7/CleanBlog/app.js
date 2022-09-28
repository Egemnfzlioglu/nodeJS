const express = require("express")
const mongoose = require("mongoose")

const ejs = require("ejs")
const Post = require("./models/Post")

const app = express()

// connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Template Engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))// urldekı datayı okumayı saglıyor
app.use(express.json())//datayı json a donduruyor

//ROUTES

app.get("/", async (req, res) => {
    const posts = await Post.find({})
    res.render("index",
        {
            posts
        })
})

app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)

    res.render("post",
        {
            post
        })
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/add_post", (req, res) => {
    res.render("add_post")
})

app.post("/add_post", async (req, res) => {
    await Post.create(req.body)
    res.redirect("/")
})








const PORT = 4000

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Başladı...`);
})