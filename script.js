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

function generatePassword() {
  var pwd = "";
  var generatedPwd = "";
  var pwdLength = prompt("What should be the length of your password? Between 8 and 128 characters.");

  if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
  

  var specialChar = confirm("Would you like to include special characters in your password?");
  var upperChar = confirm("Would you like to include upper case characters in your password?");
  var lowerChar = confirm("Would you like to include lower case characters in your password?");
  var numChar = confirm("Would you like to include numbers in your password?");

  var lwrCase = "abcdefghijklmnopqrstuvxwyz";
  var uprCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spcChar = "!@#$%&*";
  var numbers = "0123456789";

  if(specialChar) {
    pwd += spcChar;
  }

  if(upperChar) {
    pwd += uprCase;
  }

  if(numChar) {
    pwd += numbers;
  }

  if(lowerChar) {
    pwd += lwrCase;
  }

  if(pwd === "") {
    alert("The password must have at least one criteria. Please click Generate Password to try again.");
    return;
  }

  for (i=0; i<pwdLength ; i++) {
    generatedPwd += pwd.charAt(Math.floor(Math.random() * pwd.length));
  }

  

  return generatedPwd;
}
