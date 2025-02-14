//2015
//es6
//class keyword
//classes are fake
// class CreateUser{
//     constructor(name, email, password,age){
//         console.log("constructor called");
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.age = age;
//     }
//     about(){
//         return `My name is ${this.name} and I am ${this.age} years old.`;
//     }
//     pass(){
//         return `your password is ${this.password}`;
//     }
//     is18(){
//         if(this.age>=18){return "you are 18+";}
//         else{return "you are under 18";}
//     }
// }
// const user = new CreateUser('prem aman','amanprem374@gmail.com','@huih',19);
//  console.log(user.about());
//  console.log(user.is18());
//  console.log(user.pass());

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age; 
    }
    eat(){
        return`${this.name} is eating`;
    }
    iscute(){
        if(this.age<10){
            return `animal is soo cute`;
        }else{
            return `animal is not cute`;
        }
    }
}
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);//it is used to call constructor of parent class
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}
const tommy = new Dog("tommy",9,45);
console.log(tommy.eat());
console.log(tommy.iscute());
console.log(tommy.run());