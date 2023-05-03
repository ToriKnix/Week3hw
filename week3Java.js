
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

function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword(12); 
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
