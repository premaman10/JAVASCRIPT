//typeof operator(it tells us the dattype of the variable)
// let age = 22;
// let fname = "prem";
// console.log(typeof fname);
// console.log(typeof age);


//conversion of number to string
// age = age+" ";
// console.log(typeof(age));


//conversion of string to number
// let mystr = +"34"
// console.log(typeof mystr);


//string concatenation
// let firstname = "Prem";
// let lastname = "Aman";
// let fullname = firstname+" "+lastname;
// console.log(fullname);



//template
// let aboutme = `my name is ${firstname} ${lastname}`
// console.log(aboutme);



//boolean and comparison operator
// let num1 = 5;
// let num2 = 7;
// console.log(num1<num2);//it will give output in boolean type


// == vs ===
// let n = "5"
// let m = 5;
// console.log(m==n);//true
// console.log(m===n);//false
// console.log(m!=n);//false
// console.log(m!==n);//true



//if else
// let num =35 ;
// if(num>18){
//     console.log("you are adult");
// }
// else{
//     console.log("you are not adult");
// }




//ternary operator
// let nm = 5;
// let drink = nm>=5? "completed":"complete it";
// console.log(drink);




//and or operator
//and needs both condition to be true
//or needs only one condition to be true
// let firstName = "harshit";
// let ag = 20;
// if(firstName[0] ==="h" && ag ===22){
//     console.log("you are harshit and 22 years old");
// }
// else{
//     console.log("you are not harshit or not 22 years old");
// }
// if(firstName[0]==="h"||ag==22){
//     console.log("you are harshit or 22 years old");
// }


//SWITCH CASE
let day = +prompt("enter day's number");
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Invalid day");
        break;
}



//restartb