const arr = ['rock', 'paper', 'scissors'];
let playerSelection;

//add a div for displaying winner of each single time
const container = document.querySelector('#container');

let singleResultsText = '';
const divSingleResults = document.createElement('div');
divSingleResults.classList.add('divSingleResults');
divSingleResults.textContent = singleResultsText;
container.appendChild(divSingleResults);

//add a div for displaying running score during the round
let runningScoreText = '';
const divRunningScore = document.createElement('div');
divRunningScore.classList.add('divRunningScore');
divRunningScore.textContent = runningScoreText;
container.appendChild(divRunningScore);

//add a div for displaying final score and announce winner of the round when one player hit 5 points
let finalResultsText = '';
const divFinalResults = document.createElement('div');
divFinalResults.classList.add('divFinalResults');
divFinalResults.textContent = finalResultsText;
container.appendChild(divFinalResults);


function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
computerSelection = getComputerChoice(); 

function playRound() {
    computerSelection = getComputerChoice();
    if (currentScorePlayer < 5 && currentScoreComputer < 5) {
        if (playerSelection === computerSelection) {
            singleResultsText = 'It is a tie!';
        } else if ((playerSelection === 'rock') && (computerSelection == 'paper')) {
            singleResultsText = 'You lose! Paper beats Rock!';
        } else if ((playerSelection === 'paper') && (computerSelection == 'scissors')) {
            singleResultsText = 'You lose! Scissors beats Paper!';
        } else if ((playerSelection === 'scissors') && (computerSelection == 'rock')) {
            singleResultsText = 'You lose! Rock beats Scissors!';
        } else if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {
            singleResultsText = 'You win! Rock beats Paper!';
        } else if ((computerSelection === 'rock') && (playerSelection === 'paper')) {
            singleResultsText = 'You win! Scissors beats Paper!';
        } else if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {
            singleResultsText = 'You win! Rock beats Scissors!';
        } else {
            console.log('Error in playRound() if else statement!!!');
        }
    }
    divSingleResults.textContent = singleResultsText;

    if (currentScorePlayer < 5 && currentScoreComputer < 5) {
        addPoint(singleResultsText);
    } 
}

var currentScorePlayer = 0;
function addPointPlayer() {
    currentScorePlayer += 1;
};

function noPointPlayer() {
    currentScorePlayer += 0;
}

var currentScoreComputer = 0;
function addPointComputer() {
    currentScoreComputer += 1;
};

function noPointComputer() {
    currentScoreComputer += 0;
}

function addPoint(result) {
    if (result.startsWith('You lose!')) {
        addPointComputer();
        noPointPlayer();
    } else if (result.startsWith('You win!')) {
        addPointPlayer();
        noPointComputer();
    } else if (result.startsWith('It is a tie')) {
        noPointComputer();
        noPointPlayer();
    } else (console.log('Error in if else statement of addPoint()!!'))
}

function runningScore() {
    runningScoreText = 'Score: You ' + currentScorePlayer + ' : ' + currentScoreComputer + 'Monster'
    divRunningScore.textContent = runningScoreText;
    //displayFinalResults();
}



function displayFinalResults() {
    if (currentScorePlayer === 5) {
        finalResultsText = 'You are the winner! You have saved the world!\n' + 
        'Score: \n You - ' + currentScorePlayer + '\n Monster - ' + currentScoreComputer;
    } else if (currentScoreComputer === 5) {
        finalResultsText = 'The monster is the winner! The world is doomed!\n' + 
        'Score: \n You - ' + currentScorePlayer + '\n Monster - ' + currentScoreComputer;
    } else if (currentScorePlayer < 5 && currentScoreComputer < 5) {
        console.log('No player hit 5 points yet');
    } else {
        console.log('Error in displayResults()!!!');
    }
    divFinalResults.textContent = finalResultsText;
}

//DOM manipulation
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    //for each button, we add a 'click' listener
    button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Rock') {
            playerSelection = 'rock';
        } else if (e.target.textContent === 'Paper') {
            playerSelection = 'paper';
        } else if (e.target.textContent === 'Scissors') {
            playerSelection = 'scissors';
        } else (console.log('Error in button.addEventListener!!'))
        playRound();
        runningScore();
        displayFinalResults();
    });
});

function game() {
    buttons => addPoint();
    runningScore();
    if (currentScorePlayer === 5 || currentScoreComputer === 5) {
        displayFinalResults();
    }
}

game();