var http = require('http');
var express = require('express')
var app = express()
const server = http.createServer(app);
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//connect to mongoose
const dbPath = 'mongodb://localhost/Blog';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

const adminroute = require("./routes/admin");
const userroute = require('./routes/user');
app.use("/admin",adminroute)
app.use("/user",userroute)
app.get('/ab', function (req, res) {
  var myobj = { name: "Company Inc", address: "Highway 37" };
  mongo.db.collection("blogcollection").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    
  });

  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})




server.listen(8080, "0.0.0.0", () =>
  console.log("server is running on port 8080")
);
