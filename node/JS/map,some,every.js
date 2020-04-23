const _ =require("underscore");
 //map可以运用到对象上
 let obj={
     name:"ruby",
     age:18,
     addr:"美国"
 }
 let newObj=_.map(obj,(value,key) => {
     console.log(value,key);//ruby name 18 'age' 美国 addr
     

     let _o={}
     if(key=="age"&&value>=18){
         _o.desc="你已经成年了"
     }else{
         _o[key]=value;
     }
     return _o;
 })
 console.log(newObj);//[ { name: 'ruby' }, { desc: '你已经成年了' }, { addr: '美国' } ]


 //every some 
 //有一项满足条件 some
 let r1=_.some(obj,(value,key) =>{
     return value>=18;
 })
 console.log(r1);//true

 //都满足every
 let r2=_.every(obj,(value,key) =>{
     return value>18;
 })
 console.log(r2);//false