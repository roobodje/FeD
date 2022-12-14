window.onload = function() {
    document.getElementById("geluidje").play();
}
/****************/
/* ZOEKBALK******/
/****************/


var vergrootglas = document.querySelector("header img:nth-of-type(3)");
vergrootglas.addEventListener("click", veranderen);

function veranderen() {
  
  let deVierdeP = document.querySelector("section:nth-of-type(1) input:nth-of-type(2)");
  deVierdeP.classList.toggle("anders");
  
}


/****************/
/* MENU WEERGEVEN/
/****************/

var menuknop = document.querySelector("header img:nth-of-type(1)");
menuknop.addEventListener("click", veranderenmenu);

function veranderenmenu() {
  
  let menuuutje = document.querySelector("header ul:nth-of-type(1)");
  menuuutje.classList.toggle("verborgen");
  
}

/****************/
/* WINKELMANDJE**/
/****************/

var iphone14 = document.querySelector("section:nth-of-type(3)");
iphone14.addEventListener("click", mandje1);

function mandje1() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(1)");
  klikje.classList.toggle("zichtbaar");
  
}

var iphone14pro = document.querySelector("section:nth-of-type(4)");
iphone14pro.addEventListener("click", mandje2);

function mandje2() {
    let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(2)");
    klikje.classList.toggle("zichtbaar");
    
  
  
}






var paars = document.querySelector("section:nth-of-type(5) img:nth-of-type(1)");
paars.addEventListener("click", mandje3);

function mandje3() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(3)");
  klikje.classList.toggle("zichtbaar");
  
}

var goud = document.querySelector("section:nth-of-type(5) img:nth-of-type(2)");
goud.addEventListener("click", mandje4);

function mandje4() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(4)");
  klikje.classList.toggle("zichtbaar");
  
}
var zilver = document.querySelector("section:nth-of-type(5) img:nth-of-type(3)");
zilver.addEventListener("click", mandje5);

function mandje5() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(5)");
  klikje.classList.toggle("zichtbaar");
  
}
var zwart = document.querySelector("section:nth-of-type(5) img:nth-of-type(4)");
zwart.addEventListener("click", mandje6);

function mandje6() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(6)");
  klikje.classList.toggle("zichtbaar");
  
}






var opslag1 = document.querySelector("section:nth-of-type(6)");
opslag1.addEventListener("click", mandje7);

function mandje7() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(7)");
  klikje.classList.toggle("zichtbaar");
  
}

var opslag2 = document.querySelector("section:nth-of-type(7)");
opslag2.addEventListener("click", mandje8);

function mandje8() {
  let klikje = document.querySelector("article:nth-of-type(1) p:nth-of-type(8)");
  klikje.classList.toggle("zichtbaar");
  
}



/****************/
/* KIES MODEL/
/****************/

var iphone14 = document.querySelector("section:nth-of-type(3)");
iphone14.addEventListener("click", klikken1);

function klikken1() {
  let klikje = document.querySelector("section:nth-of-type(3)");
  klikje.classList.toggle("geklikt1");
  
}

var iphone14pro = document.querySelector("section:nth-of-type(4)");
iphone14pro.addEventListener("click", klikken2);

function klikken2() {
  let klikje = document.querySelector("section:nth-of-type(4)");
  klikje.classList.toggle("geklikt2");
  
}

/****************/
/* KIES KEUR/
/****************/

var paars = document.querySelector("section:nth-of-type(5) img:nth-of-type(1)");
paars.addEventListener("click", klikken3);

function klikken3() {
  let klikje = document.querySelector("section:nth-of-type(5) img:nth-of-type(1)");
  klikje.classList.toggle("geklikt3");
  
}

var goud = document.querySelector("section:nth-of-type(5) img:nth-of-type(2)");
goud.addEventListener("click", klikken4);

function klikken4() {
  let klikje = document.querySelector("section:nth-of-type(5) img:nth-of-type(2)");
  klikje.classList.toggle("geklikt4");
  
}
var zilver = document.querySelector("section:nth-of-type(5) img:nth-of-type(3)");
zilver.addEventListener("click", klikken5);

function klikken5() {
  let klikje = document.querySelector("section:nth-of-type(5) img:nth-of-type(3)");
  klikje.classList.toggle("geklikt5");
  
}
var zwart = document.querySelector("section:nth-of-type(5) img:nth-of-type(4)");
zwart.addEventListener("click", klikken6);

function klikken6() {
  let klikje = document.querySelector("section:nth-of-type(5) img:nth-of-type(4)");
  klikje.classList.toggle("geklikt6");
  
}

/****************/
/* KIES OPSLAG/
/****************/

var opslag1 = document.querySelector("section:nth-of-type(6)");
opslag1.addEventListener("click", klikken7);

function klikken7() {
  let klikje = document.querySelector("section:nth-of-type(6)");
  klikje.classList.toggle("geklikt7");
  
}

var opslag2 = document.querySelector("section:nth-of-type(7)");
opslag2.addEventListener("click", klikken8);

function klikken8() {
  let klikje = document.querySelector("section:nth-of-type(7)");
  klikje.classList.toggle("geklikt8");
  
}