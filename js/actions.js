const shareSection = document.getElementById("share");
const userSection = document.getElementById("user")

const showShare = () => {
      userSection.classList.add("closed")
      shareSection.classList.remove("closed")
}

const doNotShow = () => {
   shareSection.classList.add("closed");
   userSection.classList.remove("closed");
}