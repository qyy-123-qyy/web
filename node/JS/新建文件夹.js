let http=require("http");
let fs=rewuire("fs");
http.createServer((req,res)=>{
    if(req.url==="/favicon") return;
    var userid=parseInt(Math.random()*8999)+1000;
    fs.mkdir("./node/"+userid);
    res.end("success");
}).listen(3000,"192.168.0.10");