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
let arr1 = ["item1","item2","item3"];
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

