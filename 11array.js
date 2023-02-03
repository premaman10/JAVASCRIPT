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


//array methods
//forEach

const num = [1,2,3,4,5,6];
function multiply(num,index){
    console.log(num*index);
}
num.forEach(multiply);


//map method


const number = [8,7,3,5,4,6,7,9,2,1];
const multi2 =()=>function (number){
    return number*2;
}
const multiplyby2 = number.map(multi2);
console.log(multiplyby2);//it will print array with all elements multiplied by 2


const userside = [
    {name:"aman",age:22},
    {name:"prem",age:20},
    {name:"rahul",age:28},
    {name:"satyam",age:35},
    {name:"prnay",age:23},
]
const usernames = userside.map((user)=>{
    return user.name;
});
console.log(usernames);



///Filter method


const no = [3,5,,6,7,8,9,1,2,32,4,,5,65,,76,78,9,8];
function isEven(no){
    return no%2==0;
}
const evennumbers = no.filter(isEven);
console.log(evennumbers);




//Reduce Method

const digit = [9,8,7,6,5,4,3,2,1];
//aim : sum of all the numbers
const sum = digit.reduce((accumulator,currentvalue)=>{
return accumulator+currentvalue;
});
console.log(sum);




const userCart = [
    {productid : 1,name : "phone", price: 15646},
    {productid : 3,name : "ps5", price: 1500646},
    {productid : 2,name : "laptop", price: 150646} 
]
const totalamount = userCart.reduce((totalPrice, currentproduct)=>{
    return totalPrice + currentproduct.price;
},0);
console.log(totalamount);




// Sort Method
const values = [9,8,67,5,4,43,23,4,5,67,78];
values.sort();
console.log(values);// it doesnt give correctoutput as js take all numbers as a string
const username = ['harshit','abcd','mohit','nitish','aman'];
username.sort();
console.log(username);//it will print in grammatical order



const products=[
    {productid:1,productname:"p1",price: 300},
    {productid:2,productname:"p2",price: 3000},
    {productid:3,productname:"p3",price: 390},
    {productid:4,productname:"p4",price: 3870},
    {productid:5,productname:"p5",price: 3540},
]

//low to high
const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

const hightlow = products.slice(0).sort((a,b)=>{
    return b.price - a.price
})
console.log(hightlow);





/// find

const animal = ["doggy","cat","lion","elephant"];
function islenthree(string){
    return string.length === 3;
}
const ans = animal.find(islenthree);
console.log(ans);



const product=[
    {productid:1,productname:"p1",price: 300},
    {productid:2,productname:"p2",price: 3000},
    {productid:3,productname:"p3",price: 390},
    {productid:4,productname:"p4",price: 3870},
    {productid:5,productname:"p5",price: 3540},
]
const myproduct = product.find((product)=>product.productid===4);
console.log(myproduct);




//every

const numb = [9,8,6,5,4,3];
const evennumb = numb.every((numb)=>numb%2===0);
console.log(evennumb);




//some 
const numbe = [9,8,6,5,4,3];
const oddnumbe = numbe.some((numbe)=>{
    return numbe%2!==0
})
console.log(oddnumbe);





//fill
//value, start , end

const myarr = new Array(10).fill(0);
console.log(myarr);
const myarray = [1,2,3,,4,5,6,7,8,9];
myarray.fill(0,2,5);
console.log(myarray);




//splice