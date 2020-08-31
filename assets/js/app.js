var modal = document.getElementById('myModal');
var cardsModal = document.getElementById('CardsModal');
var btn = document.getElementById("myBtn");
var cardsBtn = document.getElementById("cardsBtn");

var closeBio = document.getElementsByClassName("close")[0];
var closeCards = document.getElementsByClassName("close")[1];

btn.onclick = function() {
    modal.style.display = "block";
}
cardsBtn.onclick = function() {
    cardsModal.style.display = "block";
}

closeBio.onclick = function() {
    modal.style.display = "none";
}
closeCards.onclick = function() {
    cardsModal.style.display = "none";
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
    if (event.target == cardsModal) {
        cardsModal.style.display = "none";
    }
}

for (i = 0, len = img.length; i < len; i++) {
    img[i].onclick = imageModal;
}