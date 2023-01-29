var pantalla = document.getElementById("screen");
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "black";
pincel.fillRect(0,0,600,400);
var logoOneP = new Image();
logoOneP.src = "./img/onepieceLogo.png";

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




var logo = new Image(100, 100)
logo.src = "./img/onepieceLogo.png"



 document.body.appendChild(logo);
logo.onclick= itsWorking;

logoOneP.addEventListener("load", function(){
    pincel.drawImage(logoOneP,Math.floor(Math.random()*(600-100)), Math.floor(Math.random()*(400-100)),100,100);
});

logoOneP.addEventListener('click', function(){
    alert("funciona")
})
function itsWorking () {
    alert("funciona");
}










// var radio = 10;
// var xRandom;
// var yRandom;

// function printCircle(x,y,radio,color){
//     pincel.fillStyle = color;
//     pincel.beginPath();
//     pincel.arc(x,y,radio,0,2*Math.PI);
//     pincel.fill();
// }

// function clearScreen(){
//     pincel.clearRect(0,0,600,400 )
// }

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

// function shoot (evento) {
//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop;

//     if((x< xRandom + radio)&&
//         (x> xRandom - radio)&&
//         (y < yRandom + radio)&&
//         (y > yRandom - radio)) {
//             alert("Nice shoot")
//         }  
// }

// pantalla.onclick = shoot;

// var logo =document.createElement("img");
// logo.style.width = "80px";
// logo.src = "./img/onepieceLogo.png";
// document.body.appendChild(logo);