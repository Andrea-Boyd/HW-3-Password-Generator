// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["?", "!", "%", "$", "(", ")", "/"];
var passwordOptions = [];
var passwordLength = 0
var password = generatePassword();


// 
function writePassword() {  
  var confirmLower = confirm("Do you want to include lower case letters?");
  var confirmUpper = confirm("Do you want to include upper case letters?");
  var confirmNumber = confirm("Do you want to include numbers?");
  var confirmSpecials = confirm("Do you want to include special characters?");
  passwordLength = prompt("How long would you like your password to be? It can be between 8 and 128 characters in length.");
  if ( passwordLength <= 128 && passwordLength >= 8){
    determinePassword(confirmLower, confirmUpper, confirmNumber, confirmSpecials);
  }
  else {
    alert("You did not enter a valid length.");
    passwordLength = prompt("How long would you like your password to be? It can be between 8 and 128 characters in length.");
  }
  
  
  
  
  
  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

function determinePassword(var1, var2, var3, var4){
  passwordOptions = [];
  if (var1) {
      passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (var2) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (var3) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (var4) {
    passwordOptions = passwordOptions.concat(specialChar);
  }

  console.log(passwordOptions);
}

function generatePassword (){
  var arr = "";
  for (var i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * passwordOptions.length);
    arr += passwordOptions[index];
    
  }

  return arr;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
