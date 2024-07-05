document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const gridSize = 9;
    const tileSize = canvas.width / gridSize;

    let snake = [{ x: 4, y: 4 }];
    let direction = { x: 0, y: 0 };
    let apple = spawnApple();

    document.addEventListener("keydown", changeDirection);

    function gameLoop() {
        update();
        draw();
    }

    function update() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

        if (head.x === apple.x && head.y === apple.y) {
            snake.unshift(head);
            apple = spawnApple();
        } else {
            snake.pop();
            snake.unshift(head);
        }

        if (isCollision(head)) {
            resetGame();
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        ctx.fillStyle = "green";
        snake.forEach(segment => {
            ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        });

        // Draw apple
        ctx.fillStyle = "red";
        ctx.fillRect(apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);
    }

    function spawnApple() {
        let newApple;
        do {
            newApple = {
                x: Math.floor(Math.random() * gridSize),
                y: Math.floor(Math.random() * gridSize)
            };
        } while (snake.some(segment => segment.x === newApple.x && segment.y === newApple.y));
        return newApple;
    }

    function changeDirection(event) {
        const keyMap = {
            ArrowUp: { x: 0, y: -1 },
            ArrowDown: { x: 0, y: 1 },
            ArrowLeft: { x: -1, y: 0 },
            ArrowRight: { x: 1, y: 0 }
        };

        if (keyMap[event.key]) {
            direction = keyMap[event.key];
        }
    }

    function isCollision(head) {
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }

        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                return true;
            }
        }

        return false;
    }

    function resetGame() {
        snake = [{ x: 4, y: 4 }];
        direction = { x: 0, y: 0 };
        apple = spawnApple();
    }

    setInterval(gameLoop, 200);
});
