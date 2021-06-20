const express = require("express");
const router = express.Router();


router.post("/signup", (req, res) => {
    let firstname= req.body.firstname;
    let lastname= req.body.lastname;
    let email= req.body.email;
    let password= req.body.password;

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

    console.log(firstname, lastname, email,dob);
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Get User Details",
      });
});

router.post("/postblog", (req, res) => {
    
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Post Blog",
      });
});


router.get("/getblog", (req, res) => {
    
    return res.status(200).json({
        resp_code: 400,
        resp_message: " Get Blog",
      });
});

module.exports = router;

    