//refrence type
//ordered collection of items
let fruits = ["apple","mango" ,"grapes"];
console.log(fruits[0]);//first element of the array
console.log(fruits);//it print whole array
fruits[1]="papaya"
console.log(fruits);//it print new array after adding papaya

console.log(typeof fruits);//it will print object
console.log(Array.isArray(fruits));//true will be printed


//PUSH AND POP(faster than shift)
fruits.push("banana");//add banana at the end
console.log(fruits);

fruits.pop();//remove and print both the element from last
console.log(fruits);


//UNSHIFT AND SHIFT(little slower than push)
fruits.unshift("orange");//add orange at the start
console.log(fruits);
fruits.shift();//remove and print first member of the array
console.log(fruits);


//clone of array
let arr1 = ["item1","item2"];
let arr2 = arr1.slice(0);
console.log(arr2);

//concatenate
let arr3 = arr1.concat(arr2);

//spread operator
let arr4 = [...arr1,...arr2,"item6"];
console.log(arr4); 


//for loop in arr
let fr = ["aman","prem","abd","virat"]
for(let i=0;i<fr.length;i++){
    console.log(fr[i].toUpperCase());//it will print each elements of the array

}
//use const to create array because of its refrence type property
 
//for of loop 
const arr = ["hi","hello","namaste","hey"];
for(let a of arr){
    console.log(a);//it will print elements of array 
}

//for in loop
const ab = ["hi","kaunci karat bani","hello","paranam","namaste","hey"];
for(let b in ab){
    console.log(b);//it will print index of array
}


//array destructuring
const abc = ["val1","val2","val3","val4"];
let[v1,v2,v3,v4] = abc;
console.log(v1,v2,v3,v4);//it will print all the elements of array

let [a1,a2,...nerr]=abc;
console.log(nerr);//left over elements will be added in nerr

//array destructuring with default value
const abcd = ["val1","val2","val3","val4"];
let[vi1,vi2,vi3,vi4,vi5 = "default"] = abcd
console.log(v1,v2,v3,v4,v5);//it will print all the elements of array