let temp = +prompt("Enter your city temparature");
if(temp<0){
    console.log("Extreme Cold Weather");
}
else if(temp<10){
    console.log("Cold Weather");
}
else if(temp<25){
    console.log("Weather is Okay");
}
else if(temp<35){
    console.log("Have a cold shower");
}
else if(temp<45){
    console.log("on you ac");
}
else{
    console.log("too hott");
}