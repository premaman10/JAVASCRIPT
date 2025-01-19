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