//Javascript for Portfolio (Challenge3)

// Assignment code here

function generatePassword(passwordText){
  //var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  //if (confirmSkip) 
  //window.alert(playerName + " has decided to skip this fight. Goodbye!");
  var promptLength = window.prompt("How long should the password length (must be at least 8 characters and no more than 128 characters)?"); 
  
  var specialArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];
  var lowerArr = ["a", "b","c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
  var upperArr = ["A", "B","C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
  var passString = " ";
  
  if (promptLength >= 8 && promptLength <= 128){

  }
  else {
    window.alert(promptLength + " is not a number between 8 and 128. Try again");
    promptLength = window.prompt("How long should the password be (must be at least 8 characters and no more than 128 characters)?");
  }
  var promptLowercase = window.prompt("Do you want to include lowercase letters? (yes or no)");
  var promptUppercase = window.prompt("Do you want to include uppercase letters? (yes or no)");
  var promptNumeric = window.prompt("Do you want to include numeric characters? (yes or no)");
  var promptSpecial = window.prompt("Do you want to include special characters?(yes or no)");


  if (promptSpecial === "no" && promptLowercase === "no" && promptUppercase === "no" && promptNumeric === "no"){
    window.alert("You must choose at least one character type. Try again.")

    promptLowercase = window.prompt("Do you want to include lowercase letters? (yes or no)");
    promptUppercase = window.prompt("Do you want to include uppercase letters? (yes or no)");
    promptNumeric = window.prompt("Do you want to include numeric characters? (yes or no)");
    promptSpecial = window.prompt("Do you want to include special characters?(yes or no)");

  }
 
  while (promptLength > passString.length-1){

    if (promptSpecial === "yes"){
      
     var specialChar = specialArr[Math.floor(Math.random() * specialArr.length)];
    passString += specialChar.toString();
    console.log(specialChar);
    }
    if (promptUppercase === "yes"){
       var upperChar = upperArr[Math.floor(Math.random() * upperArr.length)];
       passString += upperChar.toString();
       console.log(upperChar);
    }
    if (promptLowercase === "yes") {
      var lowerChar = lowerArr[Math.floor(Math.random() * lowerArr.length)];
      passString += lowerChar.toString();
      console.log(lowerChar);
    }
    if (promptNumeric === "yes"){  
      passString += Math.floor(Math.random()*10).toString();
    }
  console.log(passString);
  }
  
passwordText = passString;
return passwordText;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());