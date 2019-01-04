var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}



var modal2 = document.getElementById('myImageModal');
var img = document.getElementsByClassName("popup");
var modalImg = document.getElementById("img01");

function imageModal() {
  modal2.style.display = "block";
  modalImg.src = this.src;
  modal2.style.zIndex = 1
}

var span2 = document.getElementsByClassName("imageClose")[0];

span2.onclick = function() { 
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

for (i = 0, len = img.length; i < len; i++){
    img[i].onclick = imageModal;
}