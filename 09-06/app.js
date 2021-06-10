
const express = require("express");
const app = express();
const axios = require("axios");
const { response } = require("express");


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).send("Hello World");
});

app.get("/about-us",(req,res) => {
    res.status(200).send("This is About Us");
});

app.post("/login",(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    res.status(200).send({email,password});
});

app.get("/pokemon",(req,res) => {
    axios
    .get("https://pokeapi.co/api/v2/ability/7/")
    .then(response) => {
        console.log(response.data);
        return res.status(200).send(response.data);
    })
    .catch((error) => {
        return res.status(500).send("error");
    });
});


const PORT =5001;

app.listen(5001,() =>{
    console.log(`My Server is running on port ${PORT}`);
});