// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Ask user for length of password
function passwordLength() {
    window.prompt("Select a password length between 8 and 128 characters");

    passwordInteger = parseInt(passwordLength, 10) //might need to be set equal to a variable

    if (passwordInteger < 8) {
    window.alert("Error: password length is too short");
    return;
    } else if (passwordInteger > 128) {
    window.alert("Error: password length is too long");
    return;
    } else {
    window.alert("Your password will be " + passwordInteger + " characters long");
    }
}

// Ask user if they want lowercase characters
function lowerCaseConfirm() {
    window.confirm("Do you want your password to contain lowercase characters?");
}

// Ask user if they want uppercase characters
function upperCaseConfirm() {
    window.confirm("Do you want your password to contain uppercase characters?");
} 
    
// Ask user if they want numeric characters
function numericConfirm() {
    window.confirm("Do you want your password to contain numeric characters?");
}

// Ask user if they want special characters
function specialCharacterConfirm() {
    window.confirm("Do you want your password to contain special characters?");
}


function passwordQueries() {

    passwordLength();
    /*if (!passwordLength) {
        return;
    }*/

    lowerCaseConfirm();

    upperCaseConfirm();

    numericConfirm();

    specialCharacterConfirm();

}

passwordQueries();

// object containing all of the query answers
var userOptions = {
    length: passwordInteger,
    hasLowerCase: lowerCaseConfirm,
    hasUpperCase: upperCaseConfirm,
    hasNumeric: numericConfirm,
    hasSpecialCharacter: specialCharacterConfirm,
}

console.log(userOptions);

//randomized element funtion

//generate password function with boolean statements

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