const max = prompt("Enter the  max number: ");
const random = Math.floor(Math.random() * max)+1;
let gusses = prompt("Enter the number:")
while(true){
  if(gusses == "quit"){
    console.log("quit the game");
    break;
  }

  if(gusses == random){
    console.log("congrats you won the game",random);
    break;
  }
  else if(gusses<random){
    gusses = prompt("number is small .Enter the number:");
  }else{
   gusses = prompt("number is large .Enter the number:");
  }
}

