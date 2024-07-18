const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const resetButton = document.getElementById('reset-button');
const boardSize = 3;
const cellSize = canvas.width / boardSize;
let board = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
let currentPlayer = 'X';
let gameOver = false;

canvas.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#023047';
    ctx.lineWidth = 5;

    for (let i = 1; i < boardSize; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
    }
    ctx.stroke();

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col]) {
                drawSymbol(board[row][col], row, col);
            }
        }
    }
}

function drawSymbol(symbol, row, col) {
    const x = col * cellSize + cellSize / 2;
    const y = row * cellSize + cellSize / 2;
    ctx.fillStyle = '#023047';
    ctx.font = `${cellSize / 2}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, x, y);
}

function handleClick(event) {
    if (gameOver) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    if (board[row][col] !== null) return;

    board[row][col] = currentPlayer;
    drawBoard();

    if (checkWinner()) {
        gameOver = true;
        alert(`${currentPlayer} wins!`);
    } else if (board.flat().every(cell => cell !== null)) {
        gameOver = true;
        alert('It\'s a draw!');
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (let i = 0; i < boardSize; i++) {
        if (board[i].every(cell => cell === currentPlayer)) return true;
        if (board.every(row => row[i] === currentPlayer)) return true;
    }
    if (board.every((row, i) => row[i] === currentPlayer)) return true;
    if (board.every((row, i) => row[boardSize - i - 1] === currentPlayer)) return true;

    return false;
}

function resetGame() {
    board = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
    currentPlayer = 'X';
    gameOver = false;
    drawBoard();
}

drawBoard(); // Draw the initial board
