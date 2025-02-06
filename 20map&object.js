//difference between map and object 
//object can only have string or symbol
//as key
//in maps you can use anything as key
//like array ,number,string

// const person = {
//     name: 'John',
//     age:19,
//     1:1
// }
// console.log(person.name);
// console.log(person['name']);
// for(let key in person){
//     console.log(key);
// }

// const person = new Map();
// person.set('firstname','prem');
// person.set(1,'aman');//by using map we can keep oyur key as numbers too
// console.log(person.get(1));
// console.log(person);

// // for(let key of person.keys()){
// //     console.log(key);
// // }
// for(let key of person){
//     console.log(key);//it will giev it as array
// }


// const person = new Map([['name','prem'],['age',17]]);
// console.log(person);
// const person1 = {
//     id: 1,
//     secondname: "aman"
// }
// const extrainfo = new Map();
// extrainfo.set(person1,{age: 18, gender: "male"});
// console.log(person1.id);
// console.log(extrainfo.get(person1));
// console.log(extrainfo.get(person1).gender);




// //clone using object.assign
// const obj = {
//     key1: "val1",
//     key2: "val2"
// }
// const obj2 = obj;
// obj.key3 = "value3"
// console.log(obj2);
// console.log(obj);//if we channge in obj it will reflect in obj2 also
// //for not let this happen we will clone it earlier we use spread operator to do 
// const obj3 = {...obj2};
// obj2.key4 = "value4";
// console.log(obj3);
// console.log(obj2);
// //now we will use Object.assign
// const obj4 = Object.assign({},obj);
// console.log(obj4);




///optional chaining
const person = {
    name: "prem",
    age: 17,
    address: {housenum: "1234"}
}
console.log(person.age);
console.log(person.address);//this will give us {housenum: "1234"}
console.log(person.address.housenum);//this will give us 1234
console.log(person.lastname);//it will not give error it will give umdefined as output
// console.log(person.lastname.name);//it will give error
console.log(person?.lastname?.name);//it will give undefined