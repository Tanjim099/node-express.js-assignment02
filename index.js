// Question 01

const http = require("http");
const port = 3000;
const hostname = "localhost";

const men = [
    {
        "id" : "1",
        "name" : "Shirt",
        "price" : "899",
        "category" : "men"
    },
    {
        "id" : "2",
        "name" : "watch",
        "price" : "1899",
        "category" : "men"
    },
    {
        "id" : "3",
        "name" : "Full T-Shirt",
        "price" : "330",
        "category" : "men"
    },
    {
        "id" : "1",
        "name" : "T Shirt",
        "price" : "520",
        "category" : "men"
    }
];

const women = [
    {
        "id" : "5",
        "name" : "FUNDAY FASHION",
        "price" : "399",
        "category" : "women"
    },
    {
        "id" : "6",
        "name" : "DIMPY GARMENTS",
        "price" : "420",
        "category" : "women"
    },
    {
        "id" : "7",
        "name" : "SIGHTBOMB",
        "price" : "409",
        "category" : "women"
    },
    {
        "id" : "8",
        "name" : "Leather Retail",
        "price" : "1709",
        "category" : "women"
    }
]

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Welcome to Men & Women Dummy Data");
    }
    else if(req.url == "/men"){
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(men));
    }
    else if(req.url == "/women"){
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(women));
    }
    else{
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not found!");
    }
});

server.listen(port, ()=>{
    console.log(`server running at ${hostname}:${port}`)
})