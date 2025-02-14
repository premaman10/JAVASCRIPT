// const user = {
//     firstname : "prem",
//     lastname: "aman",
//     email: "amanprem374@gmail.com",
//     age: 21,
//     address: "Rana Chowk, Loharadga , Jharkhand",
//     about: function(){
//         return `${this.firstname} ${this.lastname}`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// const aboutuser = user.about();
//function (that function create object)
//2.)add key value pair
//3.) object ko return krega
// function createuser(firsname, lastname, email, age, address ){
//     const user = {

//     }
//     user.firstName = firsname;
//     user.lastName = lastname;
//     user.Email = email;
//     user.Age = age;
//     user.Address = address;
//     user.about = function(){
//         return `${this.firstname} ${this.lastname}`
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };
//     return user;
// }
// const user1 = createuser('prem','aman','amanprem374@gmail.com',20,'in this world');
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const userMethods={
//     about:function(){
//         return `My name is ${this.name}`
//     },
//     is18:function(){
//         return this.age >= 18;
//     }
// }

// function createuser(name,age,address,email){
//     const user={};
//     user.name=name;
//     user.age=age;
//     user.address=address;
//     user.email=email;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }
// const user1 = createuser('prem aman',21,'ranachowk','amanprem374@gmail.com');
// console.log(user1.about());

//improve this code problem is if we want
//more usermethod than everytime we have to
//write it in create user too if we want to 
//solve this problem what we have to do
// const obj1 ={
//     key1: "val1",
//     key2: "val2",
// }
// const obj2 ={
//     key3: "val3",
// }
// console.log(obj2.ke1);//undefined

// //there is one more way to create empty object
// const obj3 = Object.create(obj1);//we are setting proto(reference)of obj2 to obj1
// obj3.key3 = "value3";
// console.log(obj3.key3);//value3
// console.log(obj3.key1);//val1

//now we will apply this in last example
const userMethods={
    about:function(){
        return `My name is ${this.name}`
    },
    is18:function(){
        return this.age >= 18;
    },
    sing:function(){
        return "sa re gama padha nisha";
    }
}

function createuser(name,age,address,email){
    const user=Object.create(userMethods);
    user.name=name;
    user.age=age;
    user.address=address;
    user.email=email;
    return user;
}
const user1 = createuser('prem aman',21,'ranachowk','amanprem374@gmail.com');
console.log(user1.about());
console.log(user1.sing());