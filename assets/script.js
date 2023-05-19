// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Ask user for length of password
function passwordLength() {
    var length = window.prompt("Select a password length between 8 and 128 characters");

    var passwordSize = parseInt(length);
  
    if (passwordLength < 8) {
    window.alert("Error: password length is too short");
    return;
    } else if (passwordLength > 128) {
    window.alert("Error: password length is too long");
    return;
    } else {
    window.alert("Your password will be " + length + " characters long");
    }
    return passwordSize;
}

// Ask user if they want lowercase characters
function lowerCaseConfirm() {
    var confirm = window.confirm("Do you want your password to contain lowercase characters?");
    var lowerCase = confirm
    return lowerCase;
}

// Ask user if they want uppercase characters
function upperCaseConfirm() {
    var confirm = window.confirm("Do you want your password to contain uppercase characters?");
    var upperCase = confirm
    return upperCase;
}
        
// Ask user if they want numeric characters
function numericConfirm() {
    var confirm = window.confirm("Do you want your password to contain numeric characters?");
    var numeric = confirm
    return numeric;
}

// Ask user if they want special characters
function specialCharacterConfirm() {
    var confirm = window.confirm("Do you want your password to contain special characters?");
    var specialCharacter = confirm
    return specialCharacter;
}


function generatePassword() {

  var passwordlength = passwordLength();
  var lowerCase = lowerCaseConfirm();
  var upperCase = upperCaseConfirm();
  var numeric = numericConfirm();
  var specialCharacter = specialCharacterConfirm();

  console.log(passwordlength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialCharacter);

  var masterArray = {
    lc: [],
    uc: [],
    nc: [],
    sc: [],
  }

  // Logic for creating master array

  if (lowerCase) {
    masterArray.lc.push(lowerCaseLetters);
  }

  if (upperCase) {
    masterArray.uc.push(upperCaseLetters);
  }

  if (numeric) {
    masterArray.nc.push(numbers);
  }
  
  if (specialCharacter) {
    masterArray.sc.push(specialCharacters);
  }

  console.log(masterArray);

  //randomized element funtion
  var index = Math.floor(Math.random() * masterArray.length);
  var passwordText = masterArray[index];

  return generatePassword;
}

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