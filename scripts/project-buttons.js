// Button 1
function theTime() {
	document.getElementById('time').innerHTML = Date();
}

// Button 2
function theClicker() {
	document.getElementById('button2').innerHTML = "I was clicked!";
}

// Button 3
function toggleText() {
	var x = document.getElementById("toggle");
	if (x.innerHTML === "Swap Text") {
		x.innerHTML = "Click again!";
	} else {
		x.innerHTML = "Swap Text";
	}
}

// Button 4
function alertp4() {
	alert("Project 1 is coming soon!");
}

// Button 5
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

//Button 6 - Alert
function alert6() {
	alert("Project 2 will be coming soon");
}