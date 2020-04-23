let http=require("http");
let fs=require("fs");
var dirs=[];
http.createServer((req,res)=>{
    if(req.url==="/favicon") return;
   //fs.stat()表示检测状态
   //fs.readdir()表示读取所有文件
   // fs.stat("../img/",function(err,data){
       // isDirectory()检测是否为文件夹
    //    console.log(data.isDirectory());
   // });
    fs.stat("../img/",function(err,files){
        // isDirectory()检测是否为文件夹
         console.log(files);//是文件名的数组，不是文件的数组
        for(let i=0;i<files.length;i++){
            fs.stat("../img/"+files[i],function(err,stats){
                //回调地狱，异步套异步
                //解决办法变成同步的，
                //先存储到数组里，解决办法es6里有promise，yield generate
                //if (fs.isDiectory) {
                //    dirs.push(files[i]);
                //}
            }); 
        }
        console.log(dirs);
    
    });
    res.end("ok");
}).listen(3000,"192.168.0.10");