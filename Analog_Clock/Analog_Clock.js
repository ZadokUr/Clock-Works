var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth * 0.9;
ctx.canvas.height = window.innerHeight * 0.9;

window.addEventListener('resize', resizeCanvas, false);

var radius = canvas.height / 2;
ctx.translate(ctx.canvas.width / 2, ctx.canvas.height/2);
var edge = radius;
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawMarks(ctx, edge);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.08, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
//Numbers
ctx.font = 18 + "px arial";
ctx.textBaseline="middle";
ctx.textAlign="center";
ctx.textColor="white"; 
ctx.save();
for(var num = 1; num <= 12; num++){
var ang = num * Math.PI / 6;
ctx.rotate(ang);
ctx.translate(0, -radius*0.90);
ctx.rotate(-ang);
ctx.fillText(num, 0, 0);
ctx.rotate(ang);
ctx.translate(0, radius*0.90);
ctx.rotate(-ang); 
}
ctx.restore();
}
function drawMarks(ctx, edge){
//Marks
for(var i = 1; i <=60; i++){
ctx.save();
ctx.rotate(i * Math.PI/30);
ctx.lineWidth = 2;
ctx.strokeStyle = "white";
ctx.beginPath();
if (i % 5 == 0){
    ctx.moveTo(edge-55, 0);
}
else{
    ctx.moveTo(edge-35, 0);
}
ctx.lineTo(edge, 0);
ctx.stroke();
ctx.closePath();
ctx.restore();
}
}
function drawTime(ctx, radius){
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
//hour
hour=hour%12;
hour=(hour*Math.PI/6)+ (minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
ctx.save();
drawHand(ctx, hour, 125, 7);
ctx.restore();
//minute
minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
ctx.save();
drawHand(ctx, minute, 180, 7);
ctx.restore();
// second
second=(second*Math.PI/30);
ctx.save();
drawHand(ctx, second, radius*0.9, 3);
ctx.restore();
}

function drawHand(ctx, pos, length, width) {
ctx.beginPath();
ctx.lineWidth = width;
ctx.moveTo(0,0);
ctx.rotate(pos);
ctx.lineTo(0, -length);
ctx.strokeStyle="white";
ctx.stroke();
ctx.rotate(-pos);
}

function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    var edge = radius;
    radius = radius * 0.90;
}