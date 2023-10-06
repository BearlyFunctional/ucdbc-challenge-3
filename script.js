// GIVEN I need a new, secure password

// *WHEN I click the button to generate a password
// *THEN I am presented with a series of prompts for password criteria

// *WHEN prompted for password criteria
// *THEN I select which criteria to include in the password

// *WHEN prompted for the length of the password
// *THEN I choose a length of at least 8 characters and no more than 128 characters

// *WHEN asked for character types to include in the password
// *THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// *WHEN I answer each prompt
// *THEN my input should be validated and at least one character type should be selected

// *WHEN all prompts are answered
// *THEN a password is generated that matches the selected criteria

// *WHEN the password is generated
// *THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");

var criteria = {
  length: 10,
  lowerCase: true,
  upperCase: true,
  numeric: true,
  specChar: true
}

var password = []
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = [1,2,3,4,5,6,7,8,9]
var specials = ['!','@','#','$','%','^','&','*','(',')','-','=','_','+','[',']',';','"',',','.','<','>','/','?','`','~']

console.log(
criteria.length + " characters\n" +
"Lowercase: " + criteria.lowerCase + "\n" +
"Uppercase: " + criteria.upperCase + "\n" +
"Numeric: " + criteria.numeric + "\n" +
"Special characters: " + criteria.specChar + "\n"
)

function writePassword() {
  criteria.length = prompt("How many characters would you like? (8-128)")

  while (criteria.length > 128 || criteria.length < 8) {
    criteria.length = prompt("Must be between 8 and 128 characters.")
  } 

  criteria.lowerCase = confirm(criteria.length + " characters\n" +
  "Lowercase: " + "\n" +
  "Uppercase: " + "\n" +
  "Numeric: " + "\n" + 
  "Special characters: " + "\n \n" + 
  "Include lowercase characters? (OK for yes, CANCEL for no.")
  
  criteria.upperCase = confirm(criteria.length + " characters\n" +
  "Lowercase: " + criteria.lowerCase + "\n" +
  "Uppercase: " + "\n" +
  "Numeric: " + "\n" + 
  "Special characters: " + "\n \n" + 
  "Include uppercase characters? (OK for yes, CANCEL for no.")
  
  criteria.numeric = confirm(criteria.length + " characters\n" +
  "Lowercase: " + criteria.lowerCase + "\n" +
  "Uppercase: " + criteria.upperCase + "\n" +
  "Numeric: " + "\n" + 
  "Special characters: " + "\n \n" + 
  "Include numeric characters? (OK for yes, CANCEL for no.")
  
  criteria.specChar = confirm(criteria.length + " characters\n" +
  "Lowercase: " + criteria.lowerCase + "\n" +
  "Uppercase: " + criteria.upperCase + "\n" +
  "Numeric: " + criteria.numeric + "\n" +
  "Special characters: " + "\n \n" + 
  "Include special characters? (OK for yes, CANCEL for no.")

  if (criteria.lowerCase == false && criteria.upperCase == false && criteria.numeric== false && criteria.specChar == false) {
    alert("At least one criteria must be selected.")
  } else {

    var confirmation = confirm(criteria.length + " characters\n" +
    "Lowercase: " + criteria.lowerCase + "\n" +
    "Uppercase: " + criteria.upperCase + "\n" +
    "Numeric: " + criteria.numeric + "\n" +
    "Special characters: " + criteria.specChar + "\n \n" +
    "These are your criteria. Confirm?"
    )

    if (confirmation == false){
      writePassword()
    } else {
      generatePassword()
    }
  }
}

function generatePassword() {
  var i = 0
  password = []

  while (criteria.length > i){
    if(criteria.length > i && criteria.numeric === true) {
      password.push(Math.floor(Math.random(9) * 10));
      i++
    }
    if(criteria.length > i && criteria.lowerCase === true) {
      var randomvalue = Math.floor(Math.random(26) * 10);
      password.push(letters[randomvalue]);
      i++
    }
    if(criteria.length > i && criteria.upperCase === true) {
      var randomvalue = Math.floor(Math.random(26) * 10);
      var randomUpper = (letters[randomvalue]);
      password.push(randomUpper.toUpperCase())
      i++
    }
    if(criteria.length > i && criteria.specChar === true) {
      var randomvalue = Math.floor(Math.random(26) * 10);
      password.push(specials[randomvalue]);
      i++
    }
  }console.log("Raw password: ", password)

  var i = 0

  while (password.length*10 > i) {
    var randomvalue = Math.floor(Math.random(password.length) * 10)
    password.push(password[randomvalue])
    password.splice(randomvalue, 1)
    i++
  }console.log("Shuffled password: ", password)

  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
}

generateBtn.addEventListener("click", writePassword);

