const band = {
    bandname: "The Local Train",
    famoussong:"Choo Lo",
    year: 2004,
};
// const v1 = band.bandname;
// const v2 = band.famoussong;
// console.log(v1,v2);
const{bandname, famoussong,year:v3}=band;
console.log(bandname);
console.log(famoussong);
console.log(v3);

//object inside array
const arr = [{
    name: "John",
    age: 25,
    gender: "male",
},{
    name: "Ram",
    age: 30,
    gender: "male",
},{
    name:"Sita",
    age :25,
    gender: "female",
}]
for(let user of arr){
    console.log(user);
    console.log(user.name);
    console.log(user.age)
    
}
const[{name},{age},{gender}]=user1;
console.log(user1);