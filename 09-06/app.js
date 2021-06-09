
const express = require("express");
const app = express();


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



const PORT =5001;

app.listen(5001,() =>{
    console.log(`My Server is running on port ${PORT}`);
});