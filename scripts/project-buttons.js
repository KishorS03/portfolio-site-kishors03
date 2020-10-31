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