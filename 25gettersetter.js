class Person{
    constructor(name,title,age){
        this.name=name;
        this.title = title;
        this.age = age;
    }
    get fullname (){
        return this.name + " " + this.title;
    }
    set fullname(fullname){
        const[firstname,secondname]=fullname.split(" ");
        this.firstname = firstname;
        this.secondname= secondname;
    }

}
const person1 = new Person('prem','aman',21);
console.log(person1.fullname);//this will also give us name bcoa we are using get 
// console.log("hello");