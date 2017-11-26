
var modal = document.getElementById('myModal');
var forms = document.getElementById('myModal2');
var formt = document.getElementById('myModal3');

var btn = document.getElementById("myBtn");
var fs = document.getElementById("forms");
var ft = document.getElementById("formt");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
fs.onclick = function() {
    forms.style.display = "block";
}
ft.onclick = function() {
    formt.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    forms.style.display = "none";
}
span3.onclick = function() {
    formt.style.display = "none";
}


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