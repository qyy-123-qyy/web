let http=require("http");
let fs=require("fs");
var dirs=[];
http.createServer((req,res)=>{
    if(req.url==="/favicon") return;
   //fs.stat()表示检测状态
   //fs.readdir()表示读取所有文件
    fs.stat("../img/",function(err,data){
       // isDirectory()检测是否为文件夹
       console.log(data.isDirectory());
    });
    res.end("yes");
}).listen(3000,"192.168.0.10");