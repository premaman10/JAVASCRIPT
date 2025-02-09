//method
//function inside object
// const person = {
//     name : "prem",
//     age : 21,
//     about: function(){
//         console.log(`i am ${this.name}  ${this.age} year old btech third year student `);
//     }
// }
// // console.log(person);
// // console.log(person.about);
// person.about();//if in future we change th eperson name and age than also it is not going to reflect  in function
//after using this keyword our problem will be solved now if 
//we chnage name and age in future it will chnaged inside function too
function personname(){
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
}
const person = {
    name : "prem",
    age: 28,
    wiyn: personname
}
const person2 = {
    name : "nayan",
    age: 18,
    wiyn: personname
}
const person3 = {
    name : "harshit",
    age : 12,
    wiyn: personname
}
const person4 = {
    name : "aman",
    age: 22,
    wiyn: personname
}
person.wiyn();//this will print person name
person2.wiyn();//this will print person2 name
person3.wiyn();//this will print person3 name
person4.wiyn();//this will print person4 name