//String are immutable any cahnge will not affect existing string it will give new string
let firstname = "PremAman"
console.log(firstname[5]);
console.log(firstname.length);
// Trim:- trims the gaps(it gives new string)
let name = "      premaman   ";
console.log(name.length);
name = name.trim()
console.log(name.length);
console.log(name);
console.log(firstname.toUpperCase());//conevert the alphabates to uppercase
console.log(firstname.toLowerCase());//convert the alphabates to lowercase
// Slice
let newstr = firstname.slice(0,4);
console.log(newstr)