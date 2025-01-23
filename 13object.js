//creating object it is of  reference type
const person={name:"prem",age:"22"};
console.log(person);
//accesing data
console.log(person.name);//prints the nmae of person
 console.log(person["name"]);//prints the name of thr person
  //add key value pair to object
  person.gender = "male";
  console.log(person); 
  const key = "email";
  person[key] = "prem@gmail.com";
  console.log(person);//it will add key's value in the object 
  console.log(Object.keys(person));//it will return array of the all key values
  const key1 = "obj1";
  const key2 = "obj2";
  const value1= "val1";
  const value2="val2";
  //const obj = {
  //key1: "val1",
  //key2: "val2",
  //}
  const obj = {
    [key1]: value1,
    [key2]: value2,
  }
//   console.log(obj);
const obj2  ={
    key3: "val3",
    key4: "val4"
}
const newobj = {...obj,...obj2,key34: "val34"}; 
console.log(newobj);

   
