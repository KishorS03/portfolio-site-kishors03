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
		var number1 = parseInt(prompt("Enter the first number"));
		var number2 = parseInt(prompt("Enter the second number"));
			if (number1 > number2) {
				alert("The larger number of the two is: " + number1);
			} else if (number2 > number1) {
				alert("The larger number of the two is: " + number2);
			}
	}

// Create a JavaScript function, signOfProduct(), 
// that prompts the user for 3 integers and uses conditional statement(s) to output the sign of product of three numbers to the user in an alert. 
// For example: signOfProduct(3, -7, 2) returns The sign is - 
function signOfProduct() {
	alert("Enter three numbers in the following prompt")
		var n1 = parseInt(prompt("Enter the first number", "0"));
		var n2 = parseInt(prompt("Enter the second number", "0"));
		var n3 = parseInt(prompt("Enter the third number", "0"));
		var product = n1 * n2 * n3;
			if (product > 0) {
				alert("The sign of the product is: positive: " + product);
			} else if (product < 0) {
				alert("The larger number of the two is: negative: " + product);
			}
}

// Create a JavaScript function, threeNumberSort(), 
// that prompts the user for 3 numbers and uses conditional statement(s) to sort the numbers from least to greatest. 
// Display an alert box to show the result. For example: threeNumberSort(0, -1, 4)  returns (4, 0, -1)
function threeNumberSort() {
	alert("Enter three numbers in the following prompt")
		var sort1 = parseInt(prompt("Enter the first number", "0"));
		var sort2 = parseInt(prompt("Enter the second number", "0"));
		var sort3 = parseInt(prompt("Enter the third number", "0"));
			if (sort1 < sort2 && sort2 < sort3) {
				alert(sort1 + ", " + sort2 + ", " + sort3);
			} else if (sort1 < sort3 && sort3 < sort2) {
				alert(sort1 + ", " + sort3 + ", " + sort2);
			} else if (sort2 < sort1 && sort1 < sort3) {
				alert(sort2 + ", " + sort1 + ", " + sort3);
			} else if (sort2 < sort3 && sort3 < sort1) {
				alert(sort2 + ", " + sort3 + ", " + sort1);
			} else if (sort3 < sort2 && sort2 < sort1) {
				alert(sort3 + ", " + sort2 + ", " + sort1);
			} else if (sort3 < sort1 && sort1 < sort2) {
				alert(sort3 + ", " + sort1 + ", " + sort2);
			}
}
// 8 2 4
// Create a JavaScript function, forSumThrees(), that uses a for loop to sum the multiples of 3 under 1000. Log the result to the console
function forSumThrees() {
	var sum = 0;
		for (let i = 0; i < 1000; i++) {
			if (i % 3 === 0) {
				sum += i;
			}
		}
	console.log(sum);
}

// Create a JavaScript function, whileSumThrees(), that uses a while loop to sum the multiples of 3 under 1000. Log the result to the console
function whileSumThrees() {
	var sum1 = 0;
	let x = 0;
		while (x < 1000) {
			if (x % 3 === 0) {
				sum1 += x;
			}
		x++;
		}
	console.log(sum1)
}

// Create a JavaScript function, tenFour() that iterates (counts through) the integers from 1 to 100. 
// For multiples of 4 print the word Four instead of the number and for the multiples of 10 print Ten. 
// For numbers which are multiples of both four and ten print TenFour!.
function tenFour() {
	for (var i = 1; i <= 100; i++) {
	 		if (i % 4 === 0 && i % 10 === 0) {
	 				console.log(i + "TenFour!");
	 		}	else if (i % 4 === 0) {
	 				console.log(i + "Four");
	 		}	else if (i % 10 === 0) {
	 				console.log(i + "Ten");
	 		}	else {
	 				console.log(i);
	 		}
	 } 
}

function finalAssignment(){
	// Uses a prompt from the user and returns an encrypted version
	var plain = prompt("Enter a message to be encrypted");
	var ciphertxt = "";
	var firstletter = "";
	var secondletter = "";
  	plain = plain.split(" ");
		for (var i = 0; i < plain.length; i = i + 1){
			if (plain[i].length > 2){
				plain[i] = plain[i].replace(/a/g, "s").replace(/o/g, "i").replace(/l/g, "k"); // Replaces the letter a to s, the letter o to and l to k
				firstletter = plain[i][0];
				secondletter = plain[i][1]; // Saves the second letter of a word
				ciphertxt += (plain[i]).slice(0).slice(1).slice(1);
				ciphertxt += secondletter += firstletter + "sin";
			} else {
				ciphertxt += (" " + plain[i] + " "); // If length is 2 or less, the message is unaltered
			}
		}
	document.getElementById("encrypted").innerHTML = ciphertxt;
}

function finalAssignmentV2(){
	var ciphertext = document.getElementById("encrypted").innerHTML
	var decrypted = ""; // plaintext
	var firstL = "";
	var secondL = "";
	ciphertext = ciphertext.split(" ");
	for (var x = 0; x < ciphertext.length; x = x + 1){
		if (ciphertext[x].length > 2){
			ciphertext[x] = ciphertext[x].slice(0, -3);
			firstL = ciphertext[x][-1];
			secondL = ciphertext[x][-2];
			decrypted += (ciphertext[x]).slice(-1, -2);
			decrypted += ciphertext[x].replace(/s/g, "a").replace(/i/g, "o").replace(/k/g, "l");
			decrypted = firstL += secondL += decrypted;
		} else {
			decrypted += (" " + ciphertext[x] + " ");
		}
	}
	document.getElementById("decrypted").innerHTML = decrypted;
	console.log(firstletter);
}

// for (var i = 0; i < text.length; i = i + 1){
			//	if (text[i].length > 2){
			//		text = text[i].replace(/s/g, "a").replace(/i/g, "o").replace(/k/g, "l");
			//		text = text.toString();
			//		text = text.slice(0, -3);
			

			// save letters, then slice them oof, then replac the letters, and them add letters 1 and 2

			