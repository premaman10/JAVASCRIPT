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
function createuser(firsname, lastname, email, age, address ){
    const user = {

    }
    user.firstName = firsname;
    user.lastName = lastname;
    user.Email = email;
    user.Age = age;
    user.Address = address;
    user.about = function(){
        return `${this.firstname} ${this.lastname}`
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}
const user1 = createuser('prem','aman','amanprem374@gmail.com',21,'in this world');
console.log(user1);
const is18 = user1.is18();
console.log(is18);