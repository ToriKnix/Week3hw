// Define the generate button element
var generateBtn = document.querySelector("#generate");


function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyz1234567890";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// I have defined the function that writes the random password
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword(12); //I have set the length to 8 characters
  passwordText.value = password;
}

// Add an event listener to the generate button
generateBtn.addEventListener("click", writePassword);
