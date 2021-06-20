const express = require("express");
const router = express.Router();
const user = require('../models/usermodel');
const blog = require('../models/blogmodel');


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

  user.create(body).then(function(user){
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

    console.log(firstname, lastname, email, password);
    return res.status(200).json({
        resp_code: 400,
        resp_message: " User Registered!",
      });
});


router.post("/login", (req, res) => {
    let email= req.body.email;
    let password= req.body.password;

    console.log( email, password);
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Logged In!",
      });
});


router.get("/getUser", (req, res) => {
    let firstname= req.body.firstname;
    let lastname= req.body.lastname;
    let email= req.body.email;
    let dob= req.body.dob;

    body = {
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "dob":dob
      
  }
  user.find(body).then(function(user){
      if (user.length >0){
          return res.status(200).json({
              resp_code: 200,
              resp_message: " User Details!",
            });
      }
      else{
          return res.status(403).json({
              resp_code: 403,
              resp_message: "No Data !",
            });

      }
     
  }).catch((next)=>{
      console.log(next);
      return res.status(500).json({
          resp_code: 500,
          resp_message: "Some Error Occured!",
        });
      });

    console.log(firstname, lastname, email,dob);
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Get User Details",
      });
});

router.post("/postblog", (req, res) => {
    
  let heading= req.body.heading;
  let blogdata= req.body.blogdata;
  let userid= req.body.userid;

  var body = {
    "heading":heading,
    "blogdata":blogdata,
    "userid":userid

}

blog.create(body).then(function(blog){
    return res.status(200).json({
        resp_code: 200,
        resp_message: "Details",
      });
    }).catch((next)=>{
      console.log(next);
      return res.status(500).json({
          resp_code: 500,
          resp_message: "Some Error Occured!",
        });

  });
  

  console.log(heading,blog,userid);
  return res.status(200).json({
      resp_code: 400,
      resp_message: " Get Details",
    });
});


router.get("/getblog", (req, res) => {
    
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Get Blog",
      });
});

module.exports = router;

    