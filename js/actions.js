const shareSection = document.getElementById("share");
const authorSection = document.getElementById("article-author");
const arrowFooter = document.getElementById("arrow-footer");
const arrowPopup = document.getElementById("arrow-popup");

arrowPopup.addEventListener("click", (e) => {
      shareSection.classList.toggle("open");
});

arrowFooter.addEventListener("click", (e) => {
      shareSection.classList.toggle("open");
});

