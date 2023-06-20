var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecialCase;
var userChoices;


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var to Upper Case---
var blankUpper = [];
var toUpper = function (z) {
    return z.toUpperCase();
};
upperCase = lowercase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the inputText
function writePassword() {
    var password = generatePassword ();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword); 
// Start function
function generatePassword () {
    // Ask for user Input
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
    console.log("Password length " + passwordLength);
    
    if(!passwordLength) {
      alert("Required value");

    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Choose between 8 and 128 characters")
        console.log ("Password length" + passwordLength);

    } else {
        confirmLower= confirm("Will this have lower case letters?");
        console.log ("Lower case" + confirmLower);
        confirmUpper = confirm("Will this have upper case letters?");
        console.log("Upper Case" + confirmUpper)
        confirmNumber= confirm("Will this have numbers included?");
        console.log ("Numbers"+ confirmNumber);
        confirmSpecialCase = confirm ("Will this have special case characters?");
        console.log ("Special Characters" + confirmSpecialCase); 

    };
    else if (confirmLower && confirmUpper confirmSpecialCase){
        userChoices = lowercase.concat(upperCase, numbers , special);
        console.log(userChoices);
    }