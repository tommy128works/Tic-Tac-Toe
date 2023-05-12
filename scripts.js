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

  // function turnCounter
  let turnCount = 0;
  const getTurnCount = () => {
    turnCount++;
    return turnCount;
  };

  // function addMarker to array
  const addMarker = (marker, row, col) => {
    gameBoard[row][col] = marker;
  };

  // function checkWinCond
  const checkWinCond = () => {
    let win = false;
    let tempMarker = "";
    // check horizontal directions
    for (let i = 0; i < 3; i++) {
      tempMarker = gameBoard[i][0];
      if (
        tempMarker === gameBoard[i][1] &&
        tempMarker === gameBoard[i][2] &&
        win === false
      ) {
        displayController.sayWinner(tempMarker);
        win = true;
        break;
      }
    }
    // check vertical directions
    for (let i = 0; i < 3; i++) {
      tempMarker = gameBoard[0][i];
      if (
        tempMarker === gameBoard[1][i] &&
        tempMarker === gameBoard[2][i] &&
        win === false
      ) {
        displayController.sayWinner(tempMarker);
        win = true;
        break;
      }
    }
    // check diagonals
    tempMarker = gameBoard[0][0];
    if (
      tempMarker === gameBoard[1][1] &&
      tempMarker === gameBoard[2][2] &&
      win === false
    ) {
      displayController.sayWinner(tempMarker);
      win = true;
    }

    tempMarker = gameBoard[0][2];
    if (
      tempMarker === gameBoard[1][1] &&
      tempMarker === gameBoard[2][0] &&
      win === false
    ) {
      displayController.sayWinner(tempMarker);
      win = true;
    }

    // check for tie
    if (gameController.getTurnCount() === 9 && win === false) {
      displayController.sayTie();
    }
  };

  // function resetGame

  return {
    getGameBoard,
    changePlayerTurn,
    getPlayerTurn,
    getTurnCount,
    addMarker,
    checkWinCond,
  };
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
            gameController.checkWinCond();
          }
        });

        board.appendChild(tile);
      }
    }
  };

  // announce winner
  const sayWinner = (marker) => {
    if (marker === playerOne.getMarker()) {
      console.log("Player one wins");
    } else if (marker === playerTwo.getMarker()) {
      console.log("Player two wins");
    }
  };

  // announce tie
  const sayTie = () => {
    console.log("Tie!");
  };

  return { updateBoard, sayWinner, sayTie };
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
