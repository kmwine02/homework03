// Assignment Code
var generateBtn = document.querySelector("#generate");

// create booleans for password criteria
var hasUppercase = false;
var hasLowercase = false;
var hasNumbers = false;
var hasSpecialCharacters = false;

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

// Prompts user to choose password criteria and generates a password that follows the criteria
function generatePassword() {
  var numOfCharacters = window.prompt(
    "How many characters would you like your password to contain?"
  );

  if (numOfCharacters < 8) {
    window.alert("Password must be at least 8 characters.");
    password = "Your secure password";
    return password;
  } else if (numOfCharacters > 128) {
    window.alert("Password must be less than 129 characters.");
    password = "Your secure password";
    return password;
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

  var possibleCharacters = [];

  if (hasUppercase) {
    possibleCharacters = uppercase;
  }

  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }

  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  var password = [];

  for (i = 0; i < numOfCharacters; i++) {
    var randomCharacter = Math.floor(Math.random() * possibleCharacters.length);
    password.push(possibleCharacters[randomCharacter]);
    console.log(password);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
