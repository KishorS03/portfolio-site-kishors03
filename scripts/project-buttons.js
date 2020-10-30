function theTime() {
	document.getElementById('time').innerHTML = Date();
}

document.getElementById('button2').onclick = function() {myFunction()};
function myFunction() {
  document.getElementById('button2').innerHTML = "YOU CLICKED ME!";
}