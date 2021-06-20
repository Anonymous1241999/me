const express = require("express");
const router = express.Router();
const admin = require('../models/adminmodel');

router.post("/signup", (req, res) => {
    let firstname= req.body.firstname;
    let lastname= req.body.lastname;
    let email= req.body.email;
    let password= req.body.password;

    var body = {
        "firstname":firstname,
        "lastname":lastname,
        "email":email,
        "password":password

    }

    admin.create(body).then(function(admin){
        return res.status(200).json({
            resp_code: 200,
            resp_message: " User Registered!",
          });
    }).catch((next)=>{
        console.log(next);
        return res.status(500).json({
            resp_code: 500,
            resp_message: "Some Error Occured!",
          });

    });

});


router.post("/login", (req, res) => {
    let email= req.body.email;
    let password= req.body.password;
    body = {
        "email":email,
        "password":password
    }
    admin.find(body).then(function(admin){
        if (admin.length >0){
            return res.status(200).json({
                resp_code: 200,
                resp_message: " User Logged In!",
              });
        }
        else{
            return res.status(403).json({
                resp_code: 403,
                resp_message: "Wrong email or password !",
              });

        }
       
    }).catch((next)=>{
        console.log(next);
        return res.status(500).json({
            resp_code: 500,
            resp_message: "Some Error Occured!",
          });
        });
   
});


module.exports = router;

    