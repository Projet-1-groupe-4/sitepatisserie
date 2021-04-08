var mod1 = document.getElementById("gateau1");
var btn1 = document.getElementById("btn1");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = mod1.style.display = "block";
span.onclick = mod1.style.display = "none";


/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/