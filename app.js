let gamePlayData = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
];


let players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

// assessing html element
const backDrop = document.querySelector('.backdrop');
const overLay = document.querySelector('.overlay');
const userInputForm = document.querySelector('form');
const userInputElement = document.querySelector('form input');
const player1 = document.querySelector('#player-1 h2');
const gameStatus = document.getElementById('game-status');
const gameBoard = document.getElementById('game-board');
const gamePlayArea = document.querySelector('#game-board ol');
const playerTurn  = document.getElementById('player-turn');
const winnerName = document.getElementById('winner');

const gamePlayElements = document.querySelectorAll('#game-board li');



const editPlayer1 = document.getElementById('edit-player-1');
const editPlayer2 = document.getElementById('edit-player-2');
const overLayCancelBtn = document.getElementById('cancel-btn');
const startGameBtn = document.getElementById('start-game-btn');


//adding event listeners
editPlayer1.addEventListener('click', openPlayerOverlay);
editPlayer2.addEventListener('click', openPlayerOverlay);

overLayCancelBtn.addEventListener('click', closePlayerOverLay);
backDrop.addEventListener('click', closePlayerOverLay);

userInputForm.addEventListener('submit', saveUserInput);


startGameBtn.addEventListener('click',startNewGame);

gamePlayArea.addEventListener('click', gameElementClicked);