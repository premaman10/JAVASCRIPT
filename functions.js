// console.log("haappy birthday to you .........");
function wishhappybirthday(){
    console.log("haappy birthday to you .........");
}
// wishhappybirthday();//calling a function

function twosumfour(){
    console.log(2+4);
}
// twosumfour();
function threesumfive(){
    return 3+5;
}
console.log(threesumfive());
function sumtwonumbers(n1,n2){//parametrixed function
 console.log(n1+n2);
}
sumtwonumbers(8,9);

//odd or even
function checkoddoreven(num){
    if(num%2==0){
        console.log(num+" is EVEN");
    }
    else{
        console.log(num+" is ODD");
    }
}
checkoddoreven(4);
checkoddoreven(5);

function firstChar(anystring){
    return anystring[0];
}
console.log(firstChar("ABCGDD"));

function targetfinder(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            console.log(target+" found in array ");
        }
        console.log(target+" not found in array");
    }
}
targetfinder([2,3,4,5,6,7,8],10);