//  function hello(){
//     console.log("Hello, World!");
//  }
//  //javascript's function is function and object too
//  console.log(hello.name);
//  hello.myownproperty = "unique";
//  console.log(hello.myownproperty);
//  console.log(hello.prototype);//it return empty obejct which have it own constructor
//  //only function provide prototype property
//  function usern(name,age){
//     const user =Object.create(usern.prototype);
//     user.name = name;
//     user.age = age;
//     return user;
//  }
//  usern.prototype.about = function(){
//     return`${this.name} ${this.age}`;
//  }
//  usern.prototype.is18 = function(){
//     return this.age >= 18;
//  }
//  const user1 = usern('prem aman',20);
// console.log(user1.age);
// console.log(user1.about());
// console.log(user1.is18());





//new keyboard
//empty object create kr rha hai
//return krdeta  empty object ko
//function ke prototype ko inherit krdeta hai
function createuser(name,age){
    this.name = name;
    this.age = age;
}
createuser.prototype.about=function(){
    return `${this.name} ${this.age}`;
}
const user1 = new createuser("prem",18);
console.log(user1.about());
const nums = new Array(1,2,3,4,5);
console.log(nums.length); 