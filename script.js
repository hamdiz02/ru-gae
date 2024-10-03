let con = document.querySelector('.nobtn')
con.addEventListener('mouseover' ,change)
const audio = new Audio("ha gae.mp3");

function change(){
  con.style.left = ( Math.random() * 90)+ '%'
  con.style.top = ( Math.random() * 90)+ '%'
  audio.play();
}
function redirectToAnotherSite(){
  window.location.href='index1.html'
}

