window.onload = function() {
    document.getElementById("geluidje").play();
}



var vergrootglas = document.querySelector("header img:nth-of-type(3)");
vergrootglas.addEventListener("click", veranderen);

function veranderen() {
  
  let deVierdeP = document.querySelector("article:nth-of-type(1) input:nth-of-type(1)");
  deVierdeP.classList.toggle("anders");
  
}




var menuknop = document.querySelector("header img:nth-of-type(1)");
menuknop.addEventListener("click", veranderenmenu);

function veranderenmenu() {
  
  let menuuutje = document.querySelector("header ul:nth-of-type(2)");
  menuuutje.classList.toggle("verborgen");
  
}

//APPLE LASERS

var geenlaser = document.querySelector("article:nth-of-type(7) img:nth-of-type(1)");
geenlaser.addEventListener("click", actie);

function actie() {
  
  let laser = document.querySelector("article:nth-of-type(7) img:nth-of-type(1)");
  laser.classList.toggle("klik");

  let laser2 = document.querySelector("article:nth-of-type(7) img:nth-of-type(2)");
  laser2.classList.toggle("spawn");
  
}

var wellaser = document.querySelector("article:nth-of-type(7) img:nth-of-type(2)");
wellaser.addEventListener("click", actie);

function actie() {
  
  let laser = document.querySelector("article:nth-of-type(7) img:nth-of-type(2)");
  laser.classList.toggle("spawn");

  let laser2 = document.querySelector("article:nth-of-type(7) img:nth-of-type(1)");
  laser2.classList.toggle("klik");
  
}




