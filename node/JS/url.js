let http=require("http");
let url=require("url");
//创建服务器
let server=http.createServer((req,res) => {
    if(req.url==="/favicon.ico"){
       return;
    }
    //url.parse方法
   // host主机  端口port 路径path 参数querystring
   console.log(url.parse(req,url));
    //结束服务器
    res.end("你好");
})
console.log("B");
//监听
server.listen(4000,"127.0.0.1");