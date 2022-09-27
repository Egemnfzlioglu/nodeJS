const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
    }
    //res.json(blog)
    res.send(blog)

})


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Başladı...`);
})