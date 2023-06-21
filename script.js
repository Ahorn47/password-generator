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
    // if there is nothing selected add alert so they must choose one
        if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecialCase){
            userChoices= alert("You must choose 4 of the options");
            
// 4 options true
        } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecialCase){
            userChoices = lowercase.concat(upperCase, numbers , special);
            console.log(userChoices);
        }


        // 3 options true
        else if(confirmLower && confirmUpper && confirmNumber) {
            userChoices = lowercase.concat(upperCase, numbers);
            console.log(userChoices);
        }
        else if (confirmLower && confirmNumber && confirmSpecialCase){
            userChoices = lowercase.concat(upperCase, special);
            console.log(userChoices);
        }
        else if (confirmUpper && confirmNumber && confirmSpecialCase){
            userChoices = upperCase.concat(numbers, special);
            console.log(userChoices);
        }
        // 2 options true
        else if (confirmLower && confirmUpper){
            userChoices = lowercase.concat (upperCase);
            console.log(userChoices);
        }
        else if (confirmLower && confirmNumber) {
            userChoices = lowercase.concat(numbers);
            console.log(userChoices);
        }
        else if (confirmLower && confirmSpecialCase){
            userChoices = lowercase.concat(special);
            console.log(userChoices);
        }
        else if (confirmUpper && confirmNumber) {
            userChoices = upperCase.concat(numbers);
            console.log(userChoices);
        }
        else if (confirmUpper && confirmSpecialCase) {
            userChoices = upperCase.concat(special);
            console.log(userChoices)
        }
        else if (confirmNumber && confirmSpecialCase) {
            userChoices = numbers.concat(special);
            console.log(userChoices);
        }
        // 1 option true
        else if (confirmLower) {
            userChoices= lowercase;
            console.log(userChoices);
        }
        else if (confirmUpper) {
            userChoices= blankUpper.concat(upperCase);
            console.log(userChoices);
        }
        else if (confirmNumber) {
            userChoices = numbers;
            console.log(userChoices);
        }
        else if(confirmSpecialCase) {
            userChoices = special;
            console.log(userChoices);
        };
        
        var passwordBlank = [];

        for (var i = 0; i < passwordLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        passwordBlank.push(allChoices);
        console.log(allChoices);
    } 
        var password = passwordBlank.join("");
        console.log("Drum Roll and your password is:" + password);
         return password;

}




