// for opening overlay form 
function openPlayerOverlay(event) {
  playerId = +event.target.dataset.playerid;
  backDrop.style.display = 'block';
  overLay.style.display = 'block';
}
//for closing overlay form
function closePlayerOverLay() {
  backDrop.style.display = 'none';
  overLay.style.display = 'none';
  userInputElement.value = '';
}

// for saving users input on page and in javascript
function saveUserInput(event) {
  event.preventDefault();
  let inputValue = userInputElement.value.trim();
  let player = document.querySelector(`#player-${playerId}  h2`)
  if (inputValue !== '') {
    player.textContent = inputValue;
    players[playerId - 1].name = inputValue;
    backDrop.style.display = 'none';
    overLay.style.display = 'none';
    userInputElement.value = '';
  }


}

//for starting new game
function startNewGame() {
  if (players[0].name !== '' && players[1].name !== '') {
    gameBoard.style.display = 'block';
    playerTurn.textContent = players[0].name;
    //for reseting game area and game results
    gameStatus.style.display = 'none';
    turnNumber = 0;
    playerIndex = 0;
    gameEnded = false;
    
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        gamePlayData[i][j] = 0;
      }
    }
    for (let element of gamePlayElements) {
      element.textContent = '';
      element.classList.remove('selected');
    }

  }
  else {
    alert('Please fill in the players names')
  }

}

//for clicking on every game element

let playerIndex = 0;
let gameEnded = false;
function gameElementClicked(event) {
  if (event.target.tagName !== "OL" && event.target.textContent === '' && gameEnded === false) {
    event.target.textContent = players[playerIndex].symbol;
    event.target.classList.add('selected');
    let dataRow = event.target.dataset.row - 1;
    let dataCol = event.target.dataset.col - 1;
    gamePlayData[dataRow][dataCol] = playerIndex + 1;
    gameResult();
    if (playerIndex === 0) {
      playerIndex = 1;
    } else {
      playerIndex = 0;
    }
    playerTurn.textContent = players[playerIndex].name;

  }


}

// writing game result logic and we will call it in playing game function
let turnNumber = 0;
function gameResult() {
  let weHaveWinner = false;
  // using a for loop for rows and columns to check for winner
  turnNumber++;
  for (let i = 0; i <= 2; i++) {
    if (gamePlayData[i][0] === playerIndex + 1 && gamePlayData[i][0] === gamePlayData[i][1] && gamePlayData[i][1] === gamePlayData[i][2]) {
      winnerName.textContent = `You Won ${players[playerIndex].name}`;
      gameStatus.style.display = 'block';
      gameEnded = true;
      weHaveWinner = true;
    }
    if (gamePlayData[0][i] === playerIndex + 1 && gamePlayData[0][i] === gamePlayData[1][i] && gamePlayData[1][i] === gamePlayData[2][i]) {
      winnerName.textContent = `You Won ${players[playerIndex].name}`;
      gameStatus.style.display = 'block';
      gameEnded = true;
      weHaveWinner = true;
    }

  }

  // checking from top left to buttom right daigonal for winner
  if (gamePlayData[0][0] === playerIndex + 1 && gamePlayData[0][0] === gamePlayData[1][1] && gamePlayData[1][1] === gamePlayData[2][2]) {
    winnerName.textContent = `You Won ${players[playerIndex].name}`;
    gameStatus.style.display = 'block';
    gameEnded = true;
    weHaveWinner = true;
  }
  // checking from top right to buttom left daigonal for winner  
  if (gamePlayData[0][2] === playerIndex + 1 && gamePlayData[0][2] === gamePlayData[1][1] && gamePlayData[1][1] === gamePlayData[2][0]) {
    winnerName.textContent = `You Won ${players[playerIndex].name}`;
    gameStatus.style.display = 'block';
    gameEnded = true;
    weHaveWinner = true;
  }

  //writing logic for draw
  if (weHaveWinner === false) {
    if (turnNumber === 9) {
      winnerName.textContent = 'It\'s a Draw Play Again';
      gameStatus.style.display = 'block';
      gameEnded = true;

    }
  }

}