// Button 1 - Time
function theTime() {
	document.getElementById('time').innerHTML = Date();
}

// Button 2 - Replaces text on the button
function theClicker() {
	document.getElementById('button2').innerHTML = "I was clicked!";
}

// Button 3 - swaps text when clicked
function toggleText() {
	var x = document.getElementById("toggle");
	if (x.innerHTML === "Swap Text") {
		x.innerHTML = "Click again!";
	} else {
		x.innerHTML = "Swap Text";
	}
}

// Button 4 - Alert for Project 1
function alertp4() {
	alert("Project 1 is coming soon!");
}

// Button 5 - Prompt for your favorite sport with text
function sportsQ() {
  var txt;
  var sport = prompt("What is your favorite sport?:", " basketball");
  if (sport == null || sport == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "My favorite sport is" + sport;
  }
  document.getElementById("sport").innerHTML = txt;
}

// Button 6 - Alert for Project 2
function alert6() {
	alert("Project 2 will be coming soon");
}

// Button 7 - Text in the button changes colour
function videoGame() {
  var txt;
  var game = prompt("What is your favorite video game?:", " Watchdogs Legion");
  if (game == null || game == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "My favorite video game is" + game;
  }
  document.getElementById("game").innerHTML = txt;
}

// Button 8 - Text swap
function toggleText2() {
	var x = document.getElementById("toggle2");
	if (x.innerHTML === "The text will swap when button is clicked") {
		x.innerHTML = "Click the button to revert";
	} else {
		x.innerHTML = "The text will swap when button is clicked";
	}
}

// Button 9 - Alert for Project 3
function alert9() {
	alert("Project 3 is coming soon");
}

// Button 10 - 
function clickMe() {
	document.getElementById('button10').innerHTML = "The final button - #10"
}

// Create a JavaScript function, largerNumber() 
// that prompts the user for two integers and uses conditional statement(s) to alert the user to the larger of the two numbers. 
// For example: largerNumber(3, 18) returns 18
function largerNumber() {
	alert("Enter two numbers in the following prompt")
		var num1 = prompt("Enter the first number", "0");
		var num2 = prompt("Enter the second number", "0");
			if (num1 > num2) {
				alert("The larger number of the two is: " + num1);
			} else if (num2 > num1) {
				alert("The larger number of the two is: " + num2);
			}
	}

// Create a JavaScript function, signOfProduct(), 
// that prompts the user for 3 integers and uses conditional statement(s) to output the sign of product of three numbers to the user in an alert. 
// For example: signOfProduct(3, -7, 2) returns The sign is - 
function signOfProduct() {
	alert("Enter three numbers in the following prompt")
		var num1 = prompt("Enter the first number", "0");
		var num2 = prompt("Enter the second number", "0");
		var num3 = prompt("Enter the third number", "0");
		var product = num1 * num2 * num3;
			if (num1 > 0) {
				alert("The sign of the product is: positive");
			} else if (num2 < 0) {
				alert("The larger number of the two is: negative");
			}
}

// Create a JavaScript function, threeNumberSort(), 
// that prompts the user for 3 numbers and uses conditional statement(s) to sort the numbers from least to greatest. 
// Display an alert box to show the result. For example: threeNumberSort(0, -1, 4)  returns (4, 0, -1)
function threeNumberSort() {
	alert("Enter three numbers in the following prompt")
		var num1 = prompt("Enter the first number", "0");
		var num2 = prompt("Enter the second number", "0");
		var num3 = prompt("Enter the third number", "0");
			if (num1 < num2 < num3) {
				alert(num1 + ", " + num2 + ", " + num3);
			} else if (num1 < num3 < num2) {
				alert(num1 + ", " + num3 + ", " + num2);
			} else if (num2 < num1 < num3) {
				alert(num2 + ", " + num1 + ", " + num3);
			} else if (num2 < num3 < num1) {
				alert(num2 + ", " + num3 + ", " + num1);
			} else if (num3 < num2 < num1) {
				alert(num3 + ", " + num2 + ", " + num1);
			} else if (num3 < num1 < num2) {
				alert(num3 + ", " + num1 + ", " + num2);
			}
}

// Create a JavaScript function, forSumThrees(), that uses a for loop to sum the multiples of 3 under 1000. Log the result to the console
