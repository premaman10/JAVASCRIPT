// //object
// //react

// const person = {
//     name: 'John',
//     gender: "male",
//     age : 50
// }
// function details({name,gender,age}){
//     console.log(name);
//     console.log(gender);
//     console.log(age);
// }
// details(person);



// // call back function

// function myfunc(a){
//     console.log('hello world');
//     a();
// }
// const a = ()=>{
//     console.log('arrow function');
// }
// myfunc(a);


//function returning function
function myfunc(){
    return func;
}
function func(){
    console.log('function returning function');
}