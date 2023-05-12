const gameController = (() => {
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  // function getGameBoard

  // function resetGame

  // function getPlayerTurn

  // function addMarker to array
  const addMarker = (player, row, col) => {
    gameBoard[col][row] = player.getMarker();
  };
  // function checkWinCond
})();

const displayController = (() => {
  // function updateBoard
  function updateBoard() {
    const board = document.getElementById("gameBoard");

    while (board.hasChildNodes()) {
      board.removeChild(board.firstChild);
    }

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const tile = document.createElement("div");
        tile.dataset.col = x;
        tile.dataset.row = y;
        if (gameBoard[y][x] === null) {
          tile.dataset.isFree = 1;
        } else {
          tile.dataset.isFree = 0;
          tile.textContent = gameBoard[y][x];
        }
        tile.addEventListener("click", (event) => {
          // need to change this to keep track of player turn
          addMarker(
            player,
            event.target.getAttribute("data-row"),
            event.target.getAttribute("data-col")
          );
        });

        board.appendChild(tile);
      }
    }
  }
})();

const Player = (marker) => {
  const getMarker = () => marker;

  return { getMarker };
};

const playerOne = Player("X");
const playerTwo = Player("O");

// updateBoard();
