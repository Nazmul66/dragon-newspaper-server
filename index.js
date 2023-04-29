const express = require("express");
const app = express();
const cors = require("cors");
const category = require("./data/categories.json");
const news = require('./data/news.json');
const port = process.env.PORT || 4800;

app.use(cors());

app.get("/category", (req, res) =>{
     res.send(category);
})

app.get("/news", (req , res) =>{
    res.send(news);
})

app.get("/news/:id", (req, res) =>{
    const id = req.params.id;
    // console.log(id)
    const selectedNews = news.find( n =>n._id === id)
    res.send(selectedNews)
})

app.get("/category/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    // console.log(id)
    if(id === 0){
        res.send(news);
    }
    else{
        const FilterNews = news.filter(n =>parseInt(n.category_id) === id);
        res.send(FilterNews);
    }
})

app.get("/", (req, res) =>{
    res.send("hello world");
})

app.listen(port, () =>{
    console.log(`This port is below worked :, ${port}`)
})