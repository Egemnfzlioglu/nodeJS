const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')

const ejs = require("ejs")
const Post = require("./models/Post")
const pageController = require("./controller/pageController")
const postController = require("./controller/postController")

const app = express()

// connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Template Engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // urldekı datayı okumayı saglıyor
app.use(express.json())// datayı json a donduruyor 
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))

//ROUTES

app.get("/", postController.getAllPosts)
app.get("/posts/:id", postController.getPost)
app.post("/add_post", postController.createPost)
app.put("/posts/:id", postController.updatePost)
app.delete("/posts/:id", postController.deletePost)



app.get("/about", pageController.getAboutPage)
app.get("/add_post", pageController.getAddPage)
app.get("/posts/edit/:id", pageController.getEditPage)




const PORT = 4000

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Başladı...`);
})