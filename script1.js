let img1 = document.querySelector('.img');
img1.addEventListener('click',change)
const audio = new Audio("uagae.mp3");
function change(){
  img1.style.right = ( Math.random() * 90)+ '%'
  img1.style.top = ( Math.random() * 90)+ '%'
  audio.play();
}

let img2 = document.querySelector('.img2');
img2.addEventListener('click',ichange)

const audio2 = new Audio("uagae.mp3");
function ichange(){
  img2.style.left = ( Math.random() * 90)+ '%'
  img2.style.top = ( Math.random() * 90)+ '%'
  audio2.play();
}