const http=require("node:http");

const server=http.createServer(function(req,res){
    if(req.url==="/get-secret-data"){
        res.end("There's no secret data!");
    }
    res.end("Hello Manoj!");
});

server.listen(6000);