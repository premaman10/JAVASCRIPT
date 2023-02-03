//earlier we have to write like this 
// function addtwo(a,b){
//     if(typeof b ==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// const ans = addtwo(4);
// console.log(ans);

function addtwo(a,b=0){//default parameter
    
    return a+b;
}
const ans = addtwo(4);
console.log(ans);


//rest parameter


function myfun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);//it will print 56789
}
myfun(3,4,5,6,7,8,9);

const addALL = (...nums)=>{ 
    console.log(nums);
    console.log(Array.isArray(nums));
    let sum = 0;
    for(let num of nums){
        sum =sum+num;
    }
    console.log(sum);
    
}
addALL(5,6,7,8,9);