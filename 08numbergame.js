let winning_number = 17;
let user_number = prompt("guess a number?");
if (user_number == winning_number) {
    console.log("you guessed it right");
}
else{
   if(user_number< winning_number){
    console.log("too low");
   }
   else{
    console.log("too high");
   }
}