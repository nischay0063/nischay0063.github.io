// Get the modal
var modal = document.getElementById('myModal');
var forms = document.getElementById('myModal2');
var formt = document.getElementById('myModal3');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var fs = document.getElementById("forms");
var ft = document.getElementById("formt");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
fs.onclick = function() {
    forms.style.display = "block";
}
ft.onclick = function() {
    formt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    forms.style.display = "none";
}
span3.onclick = function() {
    formt.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	else if (event.target == forms) {
        forms.style.display = "none";
    }
	else if (event.target == formt) {
        formt.style.display = "none";
    }
}