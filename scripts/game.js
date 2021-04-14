
const dummyBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function drawGrid() {
    const canvas = document.getElementById('gameBoard');
    const ctx = canvas.getContext('2d');

    // ctx.fillRect(10, 10, 150, 100);
    ctx.fillStyle = 'lightgray'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';
    dummyBoard.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            const x = (colIdx) * 20 + colIdx;
            const y = (rowIdx) * 20 + rowIdx;
            ctx.fillRect(x, y, 20, 20);
        })
    })
}

window.onload = drawGrid;