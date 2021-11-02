//Javascript for Portfolio (Challenge3)

// Assignment code here

function generatePassword(passwordText){
  
  var promptLength = window.prompt("How long should the password be (must be between 8 and 128 characters)?"); 
  if (promptLength < 8 || promptLength > 128 || isNaN(promptLength) == true){
    
    window.alert(promptLength + " is not a number between 8 and 128. Try again");
    promptLength = window.prompt("How long should the password be (must be at least 8 characters and no more than 128 characters)?");
  }


  let specialArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];
  let lowerArr = ["a", "b","c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
  let upperArr = ["A", "B","C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
  let passString = " ";
  
  let promptLowercase = " "; 
  let promptUppercase = " ";
  let promptNumeric = " ";
  let promptSpecial = " ";
  
 
  promptLowercase = window.prompt("Do you want to include lowercase letters? (yes or no)");
    if (promptLowercase === "no" || promptLowercase === "yes" || promptLowercase === "No" || promptLowercase === "Yes"){
    } else {
      window.alert("Answer must be yes or no. Try again");
      promptLowercase = window.prompt("Do you want to include lowercase letters? (yes or no)");
    }
  
  promptUppercase = window.prompt("Do you want to include uppercase letters? (yes or no)");
    if (promptUppercase === "no" || promptUppercase === "yes" || promptUppercase === "No" || promptUppercase === "Yes"){
        }else {
        window.alert("Answer must be yes or no. Try again");
        promptUppercase = window.prompt("Do you want to include uppercase letters? (yes or no)");
    }

  promptNumeric = window.prompt("Do you want to include numeric characters? (yes or no)");
    if (promptNumeric === "no" || promptNumeric === "yes" || promptNumeric === "No" || promptNumeric === "Yes"){
    } else {
      window.alert("Answer must be yes or no. Try again");
      promptNumeric = window.prompt("Do you want to include numeric characters? (yes or no)");
    }

  promptSpecial = window.prompt("Do you want to include special characters?(yes or no)");
    if (promptSpecial === "no" || promptSpecial === "yes" || promptSpecial === "No" || promptSpecial === "Yes"){
    } else {
      window.alert("Answer must be yes or no. Try again");
      promptSpecial = window.prompt("Do you want to include special characters?(yes or no)");
    }
        //if all no's
    if (promptSpecial == "no" && promptLowercase == "no" && promptUppercase == "no" && promptNumeric == "no"){
       window.alert("You must choose at least one character type. Try again.");

      promptLowercase = window.prompt("Do you want to include lowercase letters? (yes or no)");
      promptUppercase = window.prompt("Do you want to include uppercase letters? (yes or no)");
      promptNumeric = window.prompt("Do you want to include numeric characters? (yes or no)");
      promptSpecial = window.prompt("Do you want to include special characters?(yes or no)");

    }
  
  
  //loop to select random char from arrays
  while (promptLength > passString.length-1){

    if (promptSpecial == "yes"){
      
     let specialChar = specialArr[Math.floor(Math.random() * specialArr.length)];
    passString += specialChar.toString();
    console.log(specialChar);
    }
    if (promptUppercase == "yes"){
       let upperChar = upperArr[Math.floor(Math.random() * upperArr.length)];
       passString += upperChar.toString();
       console.log(upperChar);
    }
    if (promptLowercase == "yes") {
      let lowerChar = lowerArr[Math.floor(Math.random() * lowerArr.length)];
      passString += lowerChar.toString();
      console.log(lowerChar);
    }
    if (promptNumeric == "yes"){  
      passString += Math.floor(Math.random()*10).toString();
    }
  console.log(passString);
  }
  
passwordText = passString;
return passwordText;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);