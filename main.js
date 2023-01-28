var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "white";
pincel.fillRect(0,0,600,400);

var radio = 10;
var xRandom;
var yRandom;

function printCircle(x,y,radio,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function clearScreen(){
    pincel.clearRect(0,0,600,400 )
}

var x = 0;

function updateScreen(){
    clearScreen();
    xRandom = randomPosition(600);
    yRandom = randomPosition(400);
    printTarget(xRandom,yRandom);
    x++;    
}

function printTarget(x,y) {
printCircle(x,y,radio + 20,"red");
printCircle(x,y,radio + 10,"white");
printCircle(x,y,radio,"red");

}

function randomPosition(max) {
    return Math.floor(Math.random()*max)
}
xRandom = randomPosition(600);
yRandom = randomPosition(400);

printTarget(xRandom,yRandom)

setInterval(updateScreen,800) 

function shoot (evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if((x< xRandom + radio)&&
        (x> xRandom - radio)&&
        (y < yRandom + radio)&&
        (y > yRandom - radio)) {
            alert("Nice shoot")
        }

        

  
}
pantalla.onclick = shoot;