// console.log("testing");
const happybirthday = ()=>{
    console.log("<<<<<<HAPPY BIRTHDAY>>>>>>")
}
happybirthday();
const sumthreenum = (a,b,c)=>{
    console.log(a+b+c); 
}
sumthreenum(1,2,3);

const isEven = (num)=>{
        console.log(num%2==0);
}
isEven(8);

const firstchar = anystring => anystring[0];
console.log(firstchar("hello"));


//HOISTING
// hello();
// function hello(){
//     console.log("hello");
// }
console.log(hi);//it will result as undefined
var hi = "hello";

// console.log(h);//uncaught referenceerror
// const h = "hii";


//funct inside funct

const app =()=>{
    const greet = () => {
        console.log("greeting");
    }
    const add = (n1,n2)=>{
        console.log(n1+n2);
    }
    greet();
    add(2,4);
}
app();


//lexical scope
function myapp(){
    const myvar = "hii";
    function myfun(){
        const myvar=59;
        console.log("inside myfun",myvar);
    }
    const fun2 = ()=>{
        console.log("myvarianle is "+myvar);
    }
    const fun3 = function(){
        
    }
    myfun();
    fun2();
    console.log(myvar);
}
myapp();