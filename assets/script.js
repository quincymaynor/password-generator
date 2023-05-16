// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLengthQuery = function() {
    var passwordLength = window.prompt("Select a password length between 8 and 128 characters")
}

var lowerCaseQuery = function() {
    // Ask user if they want lowercase characters
    var  lowerCaseConfirm= window.confirm("Do you want your password to contain lowercase characters?");

    // If user pressed yes, add lowercase array to the password generating array
    if (lowerCaseConfirm) {
    somethingaboutaddinglowercasecharacterstothearrayforgeneratingthepassword();
    }
}

var upperCaseQuery = function() {
    // Ask user if they want uppercase characters
    var  upperCaseConfirm= window.confirm("Do you want your password to contain uppercase characters?");

    // If user pressed yes, add uppercase array to the password generating array
    if (upperCaseConfirm) {    somethingaboutaddinguppercasecharacterstothearrayforgeneratingthepassword();
    }
}

var numericQuery = function() {
    // Ask user if they want numeric characters
    var  numericConfirm= window.confirm("Do you want your password to contain numeric characters?");

    // If user pressed yes, add numeric array to the password generating array
    if (numericConfirm) {
    somethingaboutaddingnumericcharacterstothearrayforgeneratingthepassword();
    }
}

var specialCharacterQuery = function() {
    // Ask user if they want special characters
    var  spcialCharacterConfirm= window.confirm("Do you want your password to contain special characters?");

    // If user pressed yes, add special character array to the password generating array
    if (specialCharacterConfirm) {
    somethingaboutaddingspecialcharacterstothearrayforgeneratingthepassword();
    }
}
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* order of operations:
- click button to generate password
- prompt length of password criteria (between 8 and 128)
- prompt lowercase query
- prompt uppercase query
- prompt numeric query
- prompt special character query
- password generated to match query inputs
- alert containing the generated password
*/