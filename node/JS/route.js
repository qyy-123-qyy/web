//当我们用户访问/student/1234567890来查询学生的信息
//当我们用户访问/teacher/232323来查询老师的信息
let http=require("http");
let url=require("url");
let server=http.createServer((req,res) =>{
  if(req.url==="/favicon.ico"){
      return;
  }
  var userurl=req.url;
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if(userurl.substr(0,9)==="/student/"){
      var studentid=userurl.substr(9);//
      if(/^\d{10}$/.test(studentid)){
        res.end("你所查询的学生信息，id是:"+studentid);
      }
 
    }else{
        res.end("你所查询的学生信息不存在，id是:"+studentid);
    }
    res.end();
})
console.log("B");
server.listen(5000,"localhost");