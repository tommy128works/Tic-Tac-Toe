const gameController = (() => {
  let gameBoard = [
    // [null, null, null],
    // [null, null, null],
    // [null, null, null],
    ["X", "X", "X"],
    ["O", "O", "O"],
    ["X", "O", "X"],
  ];
  // function getGameBoard
  const getGameBoard = () => gameBoard;

  // function resetGame

  // function getPlayerTurn

  // function addMarker to array
  const addMarker = (player, row, col) => {
    gameBoard[col][row] = player.getMarker();
  };
  // function checkWinCond
  return { getGameBoard };
})();

const displayController = (() => {
  // function updateBoard
  const updateBoard = () => {
    const board = document.getElementById("gameBoard");

    while (board.hasChildNodes()) {
      board.removeChild(board.firstChild);
    }

    const tempGameBoard = gameController.getGameBoard();

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const tile = document.createElement("div");
        tile.dataset.col = x;
        tile.dataset.row = y;
        if (tempGameBoard[y][x] === null) {
          tile.dataset.isFree = 1;
        } else {
          tile.dataset.isFree = 0;
          tile.textContent = tempGameBoard[y][x];
        }

        // tile.addEventListener("click", (event) => {
        // need to change this to keep track of player turn
        //   addMarker(
        //     player,
        //     event.target.getAttribute("data-row"),
        //     event.target.getAttribute("data-col")
        //   );
        // });

        board.appendChild(tile);
      }
    }
  };
  return { updateBoard };
})();

const Player = (marker) => {
  const getMarker = () => marker;
  // const getMarker = () => console.log(marker);

  return { getMarker };
};

// const playerOne = Player("X");
// const playerTwo = Player("O");

// console.log(gameController.getGameBoard());
// console.log(playerOne.getMarker());

displayController.updateBoard();
