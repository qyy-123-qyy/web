let http=require("http");
let fs=require("fs");
//创建服务器
let server=http.createServer((req,res) => {
   if(req.url==="/favicon.ico"){
       return;//不处理
   }
   if(req.url=="/aa"){
      //读取文件时异步的所以我们需要写一个回调函数
      //两个参数 1.error 2.data
      fs.readFile("./b.txt",function(error,data){
          res.writeHead(200,{
            "Content-Type":"text/html;charset=utf-8"
        
        })
        res.end(data);
      })
   }else if(req.url==="/bb"){
    fs.readFile("./b.html",function(error,data){
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf-8"   
       })
        res.end(data);
    })
 } else if(req.url==="/img"){
       fs.readFile("../5.jpg",function(error,data){
           res.end(data);
       })
   } else if(req.url==="/style"){
    fs.readFile("./b.css",function(error,data){
        res.writeHead(200,{
             "Content-Type":"text/css"   
       })
        res.end(data);
   })
 } else{
       res.end("node hello world");
       console.log("A");
   }
    
})
console.log("B");
//监听
server.listen(4000,"127.0.0.1");