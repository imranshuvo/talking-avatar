'use strict';

const canvas = document.getElementById('sCanvas');
const ctx = canvas.getContext("2d");

const image = new Image(300,300);
image.src = 'me.png';

canvas.width = 300;
canvas.height = 300;

image.onload = function(){
    ctx.globalAlpha = 0.3;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height );
    ctx.globalAlpha = 1;

    drawMe();
}

function drawMe(){
    //ctx.beginPath(); //Begins the path
    ctx.moveTo(150,20);  //Start the line to draw
    ctx.lineTo(137,261); //upto this point from .moveTo
    ctx.moveTo(45,158);
    ctx.lineTo(238, 164)
    ctx.stroke(); //Draw the line now
}


// Event Listeners
canvas.addEventListener('click', (event) => {
    console.log(event.x, event.y);
});