




const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')


signIn.addEventListener("click", function(e){
    e.preventDefault();
    signIn.onclick = location.assign('/login.html')
})
signUp.addEventListener("click", function(e){
    e.preventDefault();
    signUp.onclick = location.assign('/register.html')
})










var btn = document.getElementById("btn");
window.onscroll = function () {
  if (scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function code2() {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");

img2.onclick = function () {
  img1.src = img2.src;
};
img3.onclick = function () {
  img1.src = img3.src;
};
img4.onclick = function () {
  img1.src = img4.src;
};
img5.onclick = function () {
  img1.src = img5.src;
};

////////////////
img6.onmouseenter = function () {
  img1.src = img6.src;
};
img7.onmouseenter = function () {
  img1.src = img7.src;
};
img8.onmouseenter = function () {
  img1.src = img8.src;
};
img9.onmouseenter = function () {
  img1.src = img9.src;
};

// 000000000000000999999999999999999999999999999900000000000000000000000000000000000000000000000000000000000000
// 000000000000000999999999999999999999999999999900000000000000000000000000000000000000000000000000000000000000
// 000000000000000999999999999999999999999999999900000000000000000000000000000000000000000000000000000000000000

let imgSec1 = document.getElementById("img-sec1");


let imgSec1Array = [
  
  "../images/annie-spratt--wknoTM0SuE-unsplash.jpg",
  "../images/samsung-memory-seUxMX-DhAQ-unsplash.jpg",
  "../images/samsung-memory-hwTaZXO727M-unsplash.jpg",
  "../images/samsung-memory-fCRQNzRlEP0-unsplash.jpg",
  "../images/konrad-dobosz-NFZPJY7bzFM-unsplash.jpg",
  "../images/alex-tyson-L_D4xMggPPI-unsplash.jpg"
];

let i = 0;

function showImgSec1() {
  imgSec1.setAttribute("src", imgSec1Array[i]);

  if (i == imgSec1Array.length -1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(
    showImgSec1, 3000);
}
showImgSec1();




window.document.onclick = function(){
    this.body.style.backgroundColor = "#" + Math.random().toString().slice(3, 9)
}