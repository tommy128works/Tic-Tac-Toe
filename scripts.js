let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function updateBoard() {
  const board = document.getElementById("gameBoard");

  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const tile = document.createElement("div");
      if (gameBoard[y][x] === 1) {
        tile.textContent = "X";
        tile.dataset.isFree = 0;
      } else if (gameBoard[y][x] === 0) {
        tile.textContent = "O";
        tile.dataset.isFree = 0;
      } else {
        tile.textContent = "";
        tile.dataset.isFree = 1;
      }
      tile.addEventListener("click");
      // where should i put the click function
      // updates array with player's marker

      board.appendChild(tile);
    }
  }
}

const Player = (marker) => {
  const getMarker = () => marker;

  return { getMarker };
};

const playerOne = Player("X");
const playerTwo = Player("O");

// add to tile div "onclick" for free spaces if data-isFree = 1
// data-isFree = 0 if taken

// update array
// assign 1 or 0 depending on which player's turn it is

// update board

updateBoard();
