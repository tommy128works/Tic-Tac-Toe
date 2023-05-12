const gameController = (() => {
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
    // ["X", "X", "X"],
    // ["O", "O", "O"],
    // ["X", "O", "X"],
  ];
  let isPlayerOneTurn = true;

  // function getGameBoard
  const getGameBoard = () => gameBoard;

  // function changePlayerTurn
  const changePlayerTurn = () => {
    isPlayerOneTurn = !isPlayerOneTurn;
  };

  // function resetPlayerTurn
  const resetPlayerTurn = () => {
    isPlayerOneTurn = true;
  };

  // function getPlayerTurn
  const getPlayerTurn = () => isPlayerOneTurn;

  // function addMarker to array
  const addMarker = (marker, row, col) => {
    gameBoard[row][col] = marker;
  };

  // function checkWinCond
  // function resetGame

  return { getGameBoard, changePlayerTurn, getPlayerTurn, addMarker };
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

        tile.addEventListener("click", (event) => {
          if (event.target.getAttribute("data-is-free") == 1) {
            if (gameController.getPlayerTurn() === true) {
              gameController.addMarker(
                playerOne.getMarker(),
                event.target.getAttribute("data-row"),
                event.target.getAttribute("data-col")
              );
            } else {
              gameController.addMarker(
                playerTwo.getMarker(),
                event.target.getAttribute("data-row"),
                event.target.getAttribute("data-col")
              );
            }
            displayController.updateBoard();
            gameController.changePlayerTurn();
          }
        });

        board.appendChild(tile);
      }
    }
  };
  return { updateBoard };
})();

const Player = (marker) => {
  const getMarker = () => marker;

  return { getMarker };
};

const playerOne = Player("X");
const playerTwo = Player("O");

// console.log(gameController.getGameBoard());
// console.log(playerOne.getMarker());

displayController.updateBoard();
