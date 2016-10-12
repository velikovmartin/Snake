let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
ctx.font="22px Arial";
let width = 800;
let height = 600;
let score = 0;
let snake;
let snakeSize = 15;
let food;