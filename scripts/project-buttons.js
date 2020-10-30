function theTime() {
	document.getElementById('time').innerHTML = Date();
}

function theClicker() {
	document.getElementById('button2').innerHTML = "I was clicked!";
}

function toggleText() {
	var x = document.getElementById("toggle");
	if (x.innerHTML === "Swap Text") {
		x.innerHTML = "Click again!";
	} else {
		x.innerHTML = "Swap Text";
	}
}

