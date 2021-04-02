// Assignment code here
function generatePassword() {
  var password = '';
  var pwLength = getPasswordLength();
  var criteria = getCriteria();

  console.log('pwLength ', pwLength);
  console.log('criteria ', criteria);

  var currentType;
  for (var i = 0; i < pwLength; i++) {
    // randomly choose next character type from critera
    currentType = criteria[randomNumber(0, criteria.length - 1)];
    console.log(currentType);

    // then randomly select a character of the chosen type
    password += getRandomCharacter(currentType);
    console.log('pw: ', password);
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
  }

  return criteria;
}

function getPasswordLength() {
  var length = -1;
  
  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt("Please enter a length for your password between 8 and 128 characters.");
    length = parseInt(length);
    console.log("length input: ", length);
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
