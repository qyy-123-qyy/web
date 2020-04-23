const _=require("underscore");
//range1. 起始值 2. 结束值 3. Step 值
let a1=_.range(10);
let a2=_.range(0,60,5);
console.log(a1);
console.log(a2);

//delay settimeout效果一致
function log(){
    console.log(new Date());
}

_.delay(log,2000);

