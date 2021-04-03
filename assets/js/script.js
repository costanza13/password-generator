// Assignment code here
function generatePassword() {
  var password = '';
  var pwLength = getPasswordLength();
  var criteria = getCriteria();

  //console.log('pwLength ', pwLength);
  //console.log('criteria ', criteria);

  var currentType;
  for (var i = 0; i < pwLength; i++) {
    // randomly choose next character type from critera
    currentType = criteria[randomNumber(0, criteria.length - 1)];
    //console.log(currentType);

    // then randomly select a character of the chosen type
    password += getRandomCharacter(currentType);
    //console.log('pw: ', password);
  }

  return password;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getCriteria() {
  var criteria = [];
  
  while (criteria.length === 0) {
    if (window.confirm("Include lowercase letters?")) {
      criteria.push('lowercase');
    }
    if (window.confirm("Include uppercase letters?")) {
      criteria.push('uppercase');
    }
    if (window.confirm("Include numeric characters?")) {
      criteria.push('numeric');
    }
    if (window.confirm("Include special characters?")) {
      criteria.push('special');
    }
    criteria.length == 0 && window.alert("You must select at least one character type -- the more the better!");
  }

  return criteria;
}

function getPasswordLength() {
  var length = -1;
  
  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt("Please enter a length for your password between 8 and 128 characters.");
    length = parseInt(length);
    //console.log("length input: ", length);
  }

  return length;
}

function getRandomCharacter(characterType) {
  switch (characterType) {
    case 'lowercase':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      break;
    case 'uppercase':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      break;
    case 'numeric':
      return Math.floor(Math.random() * 10);
      break;
    case 'special':
      var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      return specialChars[Math.floor(Math.random() * specialChars.length)];
      break;
  }
}

// Get references to the #generate and #password elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var copyNotice = document.querySelector("#copy-notice");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

  // show the "click to copy" notice
  copyNotice.classList.remove("hidden");

  // Add event listener to password textarea
  copyNotice.addEventListener("click", copyPasswordToClipboard);

}

function copyPasswordToClipboard() {
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  window.alert("Password copied the clipboard.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
