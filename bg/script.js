
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function for getting a random element from an array
function getRandom(arr) {
  // number rounded to the lowest number. (randomly picked var * arr -> getRandom -> generatedCharacters -> generatePassword. number you put in);
  var randIndex = Math.floor(Math.random() * arr.length);
  // picks a random Character and uses return on line 12 to start a loop
  var randElement = arr[randIndex];
  console.log(randElement)

  return randElement;
}

function generatePassword() {
  // letter the computer picks from
  var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbolCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '_'];
  // prompt lets you type in the pop-up thing (tell you the amount you can type)
  const chooseLength = prompt("Choose a password length (must be between 8-128 characters).");
  // selectedCharacters is use as a place holder for line 44-71 to hold the picked Characters
  var selectedCharacters = [];
  // save selectedCharacters and repeats it until the number on line 22 is hit
  var generatedCharacters = [];
  // puts it on the site?
  var final = []

  // if (not is not a number) <- check to see if you put a hole number in
  if (!isNaN(chooseLength)) {
    // console.log(chooseLength);

    // if (number you put in is greater than 8)
    if (chooseLength < 8) {
      // pop up if it is less than 8
      alert('Password must be at least 8 characters.');
      return;
    }

    // if (number you put in is less than 128)
    if (chooseLength > 128) {
      // pop up if it is more than 128
      alert('Password must be less then 128 characters.');
      return;
    }
    // make a yes or no pop-up for lowercase
    const confirmLower = confirm('Include lowercase letter?');
    // looks to see if you hit confirm
    if (confirmLower == true) {
      // pick a random object = pick a random object. and (that is a lowercase)
      selectedCharacters = selectedCharacters.concat(lowerCharacters);
      // save the object. return if needed(picks a random (lowercase))
      generatedCharacters.push(getRandom(lowerCharacters))
    }
    const confirmUpper = confirm('Include uppercase letter?');
    if (confirmUpper == true) {
      selectedCharacters = selectedCharacters.concat(upperCharacters);
      generatedCharacters.push(getRandom(upperCharacters))
    }
    const confirmNumber = confirm('Include numbers?');
    if (confirmNumber == true) {
      selectedCharacters = selectedCharacters.concat(numberCharacters);
      generatedCharacters.push(getRandom(numberCharacters))
    }
    const confirmSymbol = confirm('Include Symbol?');
    if (confirmSymbol == true) {
      selectedCharacters = selectedCharacters.concat(symbolCharacters);
      generatedCharacters.push(getRandom(symbolCharacters))
    }

    console.log(selectedCharacters)
    // if you put no for all the options then a pop-up will tell you to pick one and return you to the beginning
    if ((confirmLower == false) && (confirmUpper == false) && (confirmNumber == false) && (confirmSymbol == false)) {
      alert('Password must contain at least one character type.');
      return "";
    }
    // (first number is = to 0; number <less than< number you picked; goes up)
    for (var i = 0; i < chooseLength; i++) {
      //possible is = a random (character the computer pick)
      var possible = getRandom(selectedCharacters)
      //puts on line 28. return if needed(code from line 81)
      final.push(possible)
    }
    // (first number is = to 0; <less than< saved pick object. the length you choosen; up number)
    for (var i = 0; i < generatedCharacters.length; i++) {
    //puts on line 28 [object] = saved pick object is [object]
      final[i] = generatedCharacters[i]
    }
    //return to line 28. puts it on the site(the computer say)
    return final.join("")
  } else {
    console.log("not number")

    console.log(selectedCharacters);


    var password = "";


    //   selectedCharacters.random = function()
    //   selectedCharacters[Math.floor((Math.random)* lowerCharacters.chooseLength)];
  }


  //   var randomIndex = Math.floor(Math.random() * upperCharacters.lowerCharacters.numberCharacters.symbolCharacters.chooseLength);
  // password += upperCharacters.lowerCharacters.numberCharacters.symbolCharacters.substring(randomNumber, randomNumber +1);
  //}
  console.log(password)
  document.getElementById(password).value = password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
