window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var startX = 200;
    var startY = 300;
    var endX = 200
    var endY = 100;

    ctx.beginPath()
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}