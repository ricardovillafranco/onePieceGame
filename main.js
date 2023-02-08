var pantalla = document.getElementById("screen");
var pincel = pantalla.getContext('2d');
var luffy = document.getElementById("luffy")
pincel.fillStyle = "black";
pincel.fillRect(0,0,800,600);
var logoOneP = new Image();
logoOneP.src = "./img/onepieceLogo.png";
var pantallaBG = new Image();
pantallaBG.src = "./img/background.jpg"
var radio = 35;
var xRandom;
var yRandom;
let xOfset = 30;
let yOfset = 28;
xRandom = randomPosition(650);
yRandom = randomPosition(450);
let loLograste = new Image()
loLograste.src = "./img/chopper.jpg"

let speed = 1000;

 luffy.addEventListener("click", function(){
     speed =100;
     setInterval(updateScreen,speed);
 })


function randomPosition(max) {
    return Math.floor(Math.random()*max)
}

$(logoOneP).on("load",function() {
    
   updateScreen();
    pincel.drawImage(logoOneP,xRandom, yRandom,60,60);
});
pincel.drawImage(pantallaBG,0,0,800, 600) 

function clearScreen(){
    pincel.clearRect(0,0,800,600);
}
function updateScreen(){
    clearScreen();
    xRandom = randomPosition(650);
    yRandom = randomPosition(450);
    printTarget(xRandom,yRandom)
}
function printTarget(x,y){
        printCircle((x+xOfset),(y+yOfset),radio,"#2a6eea");
        pincel.drawImage(logoOneP,xRandom, yRandom,60,60);        
        
}

setInterval(updateScreen,speed)

function shoot (evento) {
   var x = evento.pageX - pantalla.offsetLeft;
   var y = evento.pageY - pantalla.offsetTop;

   if((x< (xRandom+xOfset) + radio)&&
      (x> (xRandom+xOfset) - radio)&&
      (y <(yRandom+yOfset) + radio)&&
      (y > (yRandom+yOfset) - radio)) {
          alert("Nice shoot")
          

          
          
      }  
      
}
function printCircle(x,y,radio,color){
    pincel.fillStyle = color;
     pincel.beginPath();
     pincel.arc(x,y,radio,0,2*Math.PI);
      pincel.fill();
   }
 
 
// var img = getElementById("target")

// pincel.drawImage(img, 100, 100);


// window.onload = function () {
//     var pantalla = document.getElementById("screen");
//     var pincel = pantalla.getContext('2d');
//     var img = document.getElementById("target");
//     pincel.drawImage(img, 1, 1);
//     img.onclick = function () {
//         alert("funciona")
//     }
// }




// var logo = new Image(100, 100)
// logo.src = "./img/onepieceLogo.png"



//  document.body.appendChild(logo);
// logo.onclick= itsWorking;

// logoOneP.addEventListener("load", function(){
//     pincel.drawImage(logoOneP,Math.floor(Math.random()*(600-100)), Math.floor(Math.random()*(400-100)),100,100);
// });

// logoOneP.addEventListener('click', function(){
//     alert("funciona")
// })
// function itsWorking () {
//     alert("funciona");
// }












//  function printCircle(x,y,radio,color){
//   pincel.fillStyle = color;
//    pincel.beginPath();
//    pincel.arc(x,y,radio,0,2*Math.PI);
//     pincel.fill();
//  }



// var x = 0;

// function updateScreen(){
//     clearScreen();
//     xRandom = randomPosition(600);
//     yRandom = randomPosition(400);
//     printTarget(xRandom,yRandom);
    

//     x++;    
// }

// /*function printTarget(x,y) {
// printCircle(x,y,radio + 20,"red");
// printCircle(x,y,radio + 10,"white");
// printCircle(x,y,radio,"red");
// printLogo(x,y)

// }
// */


// var logo =document.createElement("img");
//     logo.style.width = "80px";
//     logo.src = "./img/onepieceLogo.png";
//     document.body.appendChild(logo);


// function printLogo(x,y) {
//     var logo =document.createElement("img");
//     logo.style.width = "80px";
//     logo.src = "./img/onepieceLogo.png";
//     document.body.appendChild(logo);
   
// }

// function randomPosition(max) {
//     return Math.floor(Math.random()*max)
// }
// xRandom = randomPosition(600);
// yRandom = randomPosition(400);

// printTarget(xRandom,yRandom)

// setInterval(updateScreen,800) 


 pantalla.onclick = shoot;

// var logo =document.createElement("img");
// logo.style.width = "80px";
// logo.src = "./img/onepieceLogo.png";
// document.body.appendChild(logo);