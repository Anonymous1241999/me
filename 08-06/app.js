var http = require("http");



http.createServer((req,res)=>{
    res.writeHead(200);
   
    res.end("My name is Sanu Bhardwaj");
})
.listen(8000);