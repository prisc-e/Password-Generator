//Javascript for Portfolio (Challenge3)

// Assignment code here


//var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  //enemyHealth = enemyHealth - playerAttack;
  //console.log(
  //  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

function generatePassword(){
  //var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  //if (confirmSkip) 
  //window.alert(playerName + " has decided to skip this fight. Goodbye!");
  var promptLength = window.prompt("How long should the password length (must be at least 8 characters and no more than 128 characters)?"); 
  if (promptLength >= 8 && promptLength <= 128){

  }
  else {
window.alert(promptLength + " is not a number between 8 and 128. Try again");
promptLength = window.prompt("How long should the password be (must be at least 8 characters and no more than 128 characters)?");
  }
  
  var promptLowercase = window.prompt("Do you want to include lowercase letters? (Yes or No)");
  var promptUppercase = window.prompt("Do you want to include uppercase letters? (Yes or No)");
  var promptNumeric = window.prompt("Do you want to include numeric characters? (Yes or No)");
  var promptSpecial = window.prompt("Do you want to include special characters?(Yes or No)");

  if (promptLowercase === "Yes" || promptLowercase === "yes"){

    console.log("password will include lowercase characters");
  }
  else{
    
  }
  if (promptUppercase){

    console.log("password will include uppercase characters");
  }
  if (promptNumeric){

    console.log("password will include numeric characters");
  }

  if (promptSpecial){
    console.log("password will include special characters");
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());