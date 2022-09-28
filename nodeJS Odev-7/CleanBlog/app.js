const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require('method-override')

const ejs = require("ejs")
require('dotenv').config()
const Post = require("./models/Post")
const pageController = require("./controller/pageController")
const postController = require("./controller/postController")

const app = express()

// connect DB
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.nothobq.mongodb.net/post-db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => {
        console.log(err);
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


// rmb80yuqp

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Başladı...`);
})