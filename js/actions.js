const shareSection = document.getElementById("share");
const userSection = document.getElementById("user")

const showShare = () => {
      shareSection.classList.toggle("closed")
}

const doNotShow = () => {
   shareSection.classList.toggle("closed");
   userSection.classList.toggle("closed");
}