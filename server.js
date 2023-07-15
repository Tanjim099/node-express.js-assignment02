const { log } = require("console");
const express = require("express");
const { copyFileSync } = require("fs");
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.json({msg: "I am home page"});
});

app.get('/about', (req, res)=>{
    res.json({msg : "I am about page"});
});

app.get('/contact', (req, res)=>{
    res.json({email: "support@pwskills.com"})
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});