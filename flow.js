// flowerAnimation.js
window.onload = function() {
    var canvas = document.getElementById('flowerCanvas');
    var ctx = canvas.getContext('2d');

    var petals = 6;
    var maxPetalLength = 150;
    var petalWidth = 30;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var currentPetalLength = 0;

    function drawFlower() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw petals
        for (var i = 0; i < petals; i++) {
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, petalWidth, currentPetalLength, i * Math.PI / 3, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(173, 216, 230, 0.8)'; // Light blue color
            ctx.fill();
            ctx.stroke();
        }

        // Draw center
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI); // Center of the flower
        ctx.fillStyle = 'darkblue'; // Dark blue color
        ctx.fill();
        ctx.stroke();

        // Draw stem
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + 40);
        ctx.lineTo(centerX, centerY + 200);
        ctx.strokeStyle = 'darkgreen'; // Dark green color
        ctx.lineWidth = 10;
        ctx.stroke();

        // Draw text
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("I love you <3", centerX, centerY + maxPetalLength + 70);
    }

    function animate() {
        if (currentPetalLength < maxPetalLength) {
            currentPetalLength += 2; // Adjust this value to control the speed of blooming
            drawFlower();
            requestAnimationFrame(animate);
        }
    }

    animate();
};
