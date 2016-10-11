let drawModule = (function () {
    let bodySnake = function (x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
    let pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize,snakeSize)
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    }
    let scoreText = function () {
        let score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 145, h-5);
    }
	
}());