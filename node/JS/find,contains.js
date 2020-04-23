const _=require("underscore");
//find 返回第一个操作结果为true的成员。如果所有都为false，则返回undefined
let arr=[1,25,35,2,4,8,9];
let m=_.find(arr,item => item%5==0)
console.log(m);

//  contains 如果某个值在数组内，则返回true，否则返回false
_.contains([1,2,3],3);