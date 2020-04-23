//当我们用户访问/student/1234567890来查询学生的信息
//当我们用户访问/teacher/232323来查询老师的信息
let http=require("http");
let fs=require("fs");
let server=http.createServer((req,res) =>{
  //给用户模拟一个id
  var userid=parseInt(Math.random()*89999)+10000;
  console.log("欢迎id为"+userid+"的用户");
    res.end();
});
fs.writeFile("./home.htem",function(error,data){
    if(error){
        throw error;
    }
    console.log(userid+"读取完毕");
    res.end(data);
})
console.log("B");
server.listen(5000," 192.168.0.10");