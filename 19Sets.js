//set (it is iterable)
//store data
//sets also have its own methods
//no index based acces
//order is not guranteed
//unique items only (no duplicate alllowed)
const numbers = new Set([1,2,3,4,5,6,7,9,8]);
console.log(numbers.size); // 9
console.log(numbers);
//it ignores duplicate
//it doesnt give us capability to acces it by index
const num = new Set();
num.add(1);
num.add(2);
num.add(3);
num.add(4);
num.add(5);
num.add(6);
num.add(7);
num.add(8);
num.add(9);
num.add(numbers);
num.add(numbers);//it will ignoree as it is dupliacte array
num.add(['item1']);
num.add(['item1']);//this duplicate is added bcoz of it have new array in address
console.log(num);

//to check element is present in set or not
if(num.has(1)){
    console.log('1 is present in set');
}else{
    console.log('1 is not present in set');
}

//iterable
for(let number of num){
    console.log(number);
}
//to get unique elemnets we will use set
