import express from "express";
import blogPosts from "./views/store/blogPosts.js";

const app = express();
const port = 4000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: blogPosts})
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})