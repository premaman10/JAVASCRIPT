//block scope vs fnction scope
//let and const are block scope
//var is function scope
//let and const are hoisted but not initialized

{
    const nam = "prem aman";
    // console.log(name);
}
// console.log(nam);//uncaught refrence error
{
    var na = "prem aman";
}
console.log(na);