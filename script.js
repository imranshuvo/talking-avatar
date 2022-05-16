'use strict';

const canvas = document.getElementById('sCanvas');
const ctx = canvas.getContext("2d");

const image = new Image(300,300);
image.src = 'me.png';

canvas.width = 300;
canvas.height = 300;

image.onload = function(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height );
}

