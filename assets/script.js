// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword() {

  // Prompt user for password length
  var passwordLength = prompt("How many characters would you like your password to be? (8-128 characters)");

  // Check if password length is valid
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return;
  }

  // Prompt user for character types
  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("Would you like to include uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");
  var characterTypes = [lowercase, uppercase, numeric, special];

  // Check if at least one character type is selected
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate password variables
  var password = "";
  var passwordCharacters = "";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var characterSets = [lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters];

  // Create string of characters to choose from
  for (var i = 0; i < characterTypes.length; i++) {
    if (characterTypes[i]) {
      passwordCharacters += characterSets[i];
      console.log(passwordCharacters);
    }
  }

  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    console.log(password);
  }

  return password;


}