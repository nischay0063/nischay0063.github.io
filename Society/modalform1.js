

var modal = document.getElementById('myModal1');
var sub= document.getElementById('Submit1');
var s= document.getElementById('s');

var btn = document.getElementById('myBtn');


var span = document.getElementsByClassName("close1")[0];

 
btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

sub.onclick = function() {
if(s==true)
{
    modal.style.display = "none";
}
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

