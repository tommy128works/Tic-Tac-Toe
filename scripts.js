let gameBoard = [
  [1, 1, 0],
  [null, null, null],
  [0, 1, 1],
];

function updateBoard() {
  let board = document.getElementById("gameBoard");

  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      let tile = document.createElement("div");
      if (gameBoard[y][x] === 1) {
        tile.textContent = "X";
      } else if (gameBoard[y][x] === 0) {
        tile.textContent = "O";
      } else {
        tile.textContent = "";
      }
      board.appendChild(tile);
    }
  }
}

updateBoard();
