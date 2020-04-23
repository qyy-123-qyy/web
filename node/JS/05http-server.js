let http=require("http");
//创建服务器
let server=http.createServer((req,res) => {
    var random=Math.random();
    console.log(random);
    if(random>0.9){
        throw new Error("炸了");
    }
    //结束服务器
    res.end("http-server.js");
})
console.log("B");
//监听
server.listen(4000,"127.0.0.1");