// Assignment code here
function generatePassword() {
  var length = getPasswordLength();
  var criteria = getCriteria();

  console.log('length ', length);
  console.log('criteria ', criteria);

  return "password";
}

function getCriteria() {
  var criteria = {
    uppercase: getSelection('lowercase'),
    lowerrcase: getSelection('uppercase'),
    numeric: getSelection('nnumeric'),
    special: getSelection('special'),
  };
  return criteria;
}

function getPasswordLength() {
  var length = -1;
  
  while (isNaN(length) || length < 8 || length > 128) {
    window.prompt("Please enter a length for your password between 8 and 128 characters.");
    length = parseInt(length);
  }

  return length;
}

function getSelection(characterType) {
  return true;
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
generateBtn.addEventListener("click", writePassword);
