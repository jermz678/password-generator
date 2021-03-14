// Assignment code here
// arrays to hold password characters
var allCharacters = ["!", "#", "$","%","&","'", "()","*","+",",","-",".","/", ":",
";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "`", "{", "|", "}", "~", ",", "0", "1",
 "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", 
 "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B",
  "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var symbols = ["!", "#", "$","%","&","'", "()","*","+",",","-",".","/", ":",
";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "`", "{", "|", "}", "~", ","];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//pulling characters from array
function generatePassword(){
  //create an empty array
    var ar = [];
    // getting 8 random character to fil empty array
    for (i = 0; i < 8; i++){
      ar.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
      console.log(allCharacters.length)
    }
      // taking commas out of ar array
    return ar.join("");
    //if(ar.length < 8){
    //
   
};
console.log(generatePassword())
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
