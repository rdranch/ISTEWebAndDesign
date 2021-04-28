function jsStyle() {
		document.getElementById("text").style.color = "blue";
		document.getElementById("text").style.fontSize = "x-large";
		// function to change style
		// Change the color and the size of the font
		// in the paragraph with id='text'
	}

var increase = 0;
    var startingMargin = 0;
    
	function getFormValues() {
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;
        alert(fname + " " + lname)
		// function to send first and last names
		// to an 'alert' message.
	
	}
    
function move() {
    increase += 10
    document.getElementById("text").style.position = "relative";
    document.getElementById("text").style.left = increase + "px";
    // move text   I Move     10 pixels when button is hit
}    