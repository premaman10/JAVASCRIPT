// //method
// //function inside object
// // const person = {
// //     name : "prem",
// //     age : 21,
// //     about: function(){
// //         console.log(`i am ${this.name}  ${this.age} year old btech third year student `);
// //     }
// // }
// // // console.log(person);
// // // console.log(person.about);
// // person.about();//if in future we change th eperson name and age than also it is not going to reflect  in function
// //after using this keyword our problem will be solved now if 
// //we chnage name and age in future it will chnaged inside function too
// function personname(){
//     console.log(`my name is ${this.name} and i am ${this.age} years old`);
// }
// const person = {
//     name : "prem",
//     age: 28,
//     wiyn: personname
// }
// const person2 = {
//     name : "nayan",
//     age: 18,
//     wiyn: personname
// }
// const person3 = {
//     name : "harshit",
//     age : 12,
//     wiyn: personname
// }
// const person4 = {
//     name : "aman",
//     age: 22,
//     wiyn: personname
// }
// person.wiyn();//this will print person name
// person2.wiyn();//this will print person2 name
// person3.wiyn();//this will print person3 name
// person4.wiyn();//this will print person4 name


// console.log(this);//it will print window object 

// //use strict why to  write in code

// //if we dont use that
// function myfun(){
//     console.log(this);
// }
// myfun();//this will print window object

// //but if we write use strict than it will give undefined as a output
// "use strict";
// function myfun(){
//     console.log(this);
// }
// myfun();//this will print undefined as a output



//call apply bind

//call 
function abc (hobby, favband){
    console.log(this.name, this.age, hobby, favband);
}
function func(){
    console.log("hello");
}
func.call();
const user1 = {
    name: "prem",
    age: 18,
    about:function(hobby, favband){
        console.log(this.name, this.age, hobby, favband);
    }
}
const user2 = {
    name: "aman",
    age: 19,
}
user1.about.call();//undefiend undefiened
user1.about.call(user2);//data of user2 will be output
user1.about.call(user2,"guitar","the local train");
//apply if we use apply here we have to pass arguments as an array
user1.about.apply(user2,["guitar","the local train"]);
//bind
 const funct = abc.bind(user1,"guitar","the local train");
 funct();

//in case of arrow function this is one level up


//shorter syntax
const user3 = {
    firstname : "prem",
    age: 18,
    about(){
        console.log("I am prem");
    }
}
user3.about();
