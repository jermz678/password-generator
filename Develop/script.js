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

//creating password based on choices
function generatePassword(){
  var userChoiceLength = prompt("Please choose between 8 and 128 characters for your password! Type in your number choice!");
  //create an empty array
  var ar = [];
  
  //making sure user chooses between 8 and 128
    while ( userChoiceLength < 8 || userChoiceLength > 128){
    alert( "please choose again");
    userChoiceLength= prompt("Please choose between 8 and 128 characters for your password! Type in your number choice!");
    } 
    // choosing yes or no for each prompt or looping back to same question
    //big letters prompt and while loop
    var userPromptBigLetters = prompt("Would you like uppercase letters in your password? Type Y for yes, and N for no. ");
    userChoiceBigLetters = userPromptBigLetters.toLowerCase();
    while ( userChoiceBigLetters !== "y" &&  userChoiceBigLetters !== "n" ){
        alert ( "please choose again");
         userChoiceBigLetters = prompt("Would you like uppercase letters in your password? Type Y for yes, and N for no. ");
    }
    //small letters prompt and while loop
    var userPromptSmallLetters = prompt("Would you like lowercase letter in your password? Type Y for yes, and N for no. ");
    userChoiceSmallLetters = userPromptSmallLetters.toLowerCase();
    while ( userChoiceSmallLetters  !== "y" &&  userChoiceSmallLetters !== "n" ){
        alert ( "please choose again");
        userChoiceSmallLetters = prompt("Would you like lower letters in your password? Type Y for yes, and N for no. ");
    } 
    //numbers prompt and while loop
    var userPromptNumbers = prompt("Would you like numbers in your password? Type Y for yes, and N for no. ");
    userChoiceNumbers = userPromptNumbers.toLowerCase();
   while ( userChoiceNumbers !== "y"  && userChoiceNumbers !== "n" ){
        alert ( "please choose again");
        userChoiceNumbers = prompt("Would you like numbers in your password? Type Y for yes, and N for no. ");
    }//symbols prompt and while loop
    var userPromptSymbols = prompt("would you like symbols in your password?Type Y for yes, and N for no. ");
    userChoiceSymbols = userPromptSymbols.toLowerCase();
    while ( userChoiceSymbols != "y" && userChoiceSymbols != "n" ){
        alert ( "please choose again");
        userChoiceSymbols = prompt("Would you like symbols in your password? Type Y for yes, and N for no. ");
    }
    if(userChoiceSymbols === "n"  && userChoiceNumbers === "n" && userChoiceSmallLetters === "n" && userChoiceBigLetters === "n"){
        alert("sorry, we can not make you a password.  Please reload page and try again")
    }

     if((userChoiceSymbols === "n"  && userChoiceNumbers === "n" && userChoiceSmallLetters === "n" && userChoiceBigLetters === "y")){
      for (i = 0; i < userChoiceLength; i++){
        ar.push(bigLetters[Math.floor(Math.random() * bigLetters.length)]); 
      }
    }
    
     if ((userChoiceSymbols === "n"  && userChoiceNumbers === "n" && userChoiceSmallLetters === "y" && userChoiceBigLetters === "n")){
        for (i = 0; i < userChoiceLength; i++){
          ar.push(smallLetters[Math.floor(Math.random() * smallLetters.length)]); 
        }
      }

      if ((userChoiceSymbols === "n"  && userChoiceNumbers === "y" && userChoiceSmallLetters === "n" && userChoiceBigLetters === "n")){
        for (i = 0; i < userChoiceLength; i++){
          ar.push(numbers[Math.floor(Math.random() * numbers.length)]); 
        }
      }
      
      if ((userChoiceSymbols === "y"  && userChoiceNumbers === "n" && userChoiceSmallLetters === "n" && userChoiceBigLetters === "n")){
        for (i = 0; i < userChoiceLength; i++){
          ar.push(symbols[Math.floor(Math.random() * symbols.length)]); 
        }
      }
  
  

    
    

userChoiceSmallLetters
userChoiceBigLetters
userChoiceSymbols
userChoiceNumbers

    var newArray = symbols.concat(numbers);
    console.log(newArray)

    // getting userchoice to fill empty array
    
      // taking commas out of ar array
      
    return ar.join("");
    
};



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
