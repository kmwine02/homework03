// Assignment Code
var generateBtn = document.querySelector("#generate");

// create booleans for password criteria
var hasUppercase = false;
var hasLowercase = false;
var hasNumbers = false;
var hasSpecialCharacters = false;

var numOfCharacters = 0;

// add possible characters to arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "_", "{", "}", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Creates password criteria based on user inputs
function createCriteria() {
  numOfCharacters = window.prompt(
    "How many characters would you like your password to contain?"
  );

  if (numOfCharacters < 8) {
    window.alert("Password must be at least 8 characters.");
    createCriteria();
  } else if (numOfCharacters > 128) {
    window.alert("Password must be less than 129 characters.");
    createCriteria();
  } else {
    hasUppercase = window.confirm(
      "Click OK to confirm including uppercase characters."
    );
    hasLowercase = window.confirm(
      "Click OK to confirm including lowercase characters."
    );
    hasNumbers = window.confirm(
      "Click OK to confirm including numerical characters."
    );
    hasSpecialCharacters = window.confirm(
      "Click OK to confirm inlcuding special characters."
    );
  }

  checkCriteria();
}

// Checks to make sure at least one criteria is selected 
function checkCriteria() {
  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSpecialCharacters) {
    window.alert("You must select at least 1 character type.")
    generatePassword();
  } else {
    return;
  }
}

// Generates the password based on criteria provided by the user 
function generatePassword() {
  
  createCriteria();  

  var possibleCharacters = [];
  var password = [];
  var i = 0;

  if (hasUppercase) {
    possibleCharacters = uppercase;
    password.push(uppercase[Math.floor(Math.random() * uppercase.length)])
    i++
  }

  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    password.push(lowercase[Math.floor(Math.random() * lowercase.length)])
    i++
  }

  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    password.push(numbers[Math.floor(Math.random() * numbers.length)])
    i++
  }

  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
    i++
  }


  for (i; i < numOfCharacters; i++) {
    var randomCharacter = Math.floor(Math.random() * possibleCharacters.length);
    password.push(possibleCharacters[randomCharacter]);
    console.log(password);
  }
  return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
