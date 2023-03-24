//modicafications according to discord advice

const arr = ['Rock', 'Paper', 'Scissors'];

//add a div for displaying winner of each single time
const container = document.querySelector('#container');

let singleResultsText = '';
const divSingleResults = document.createElement('div');
divSingleResults.classList.add('divSingleResults');
divSingleResults.textContent = singleResultsText;
container.appendChild(divSingleResults);

//add a div for displaying final score and announce winner of the round when one player hit 5 points
let finalResultsText = '';
const divFinalResults = document.createElement('div');
divFinalResults.classList.add('divFinalResults');
divFinalResults.textContent = finalResultsText;
container.appendChild(divFinalResults);


function getComputerChoice(arr) {
    //get random index value
    let randomIndex = Math.floor(Math.random() * arr.length);

    //get random item
    const item = arr[randomIndex];

    return item;
}
//console.log(getComputerChoice(arr)); --> correctly gives me rock, paper or scissors

//const result = getComputerChoice(arr);
var computerSelection = getComputerChoice(arr);
//let playerSelection = prompt('Input "rock", "paper, or "scissors."');
var playerSelection = '';
//change prompt() to DOM methods
const userInputDiv = document.createElement('div');
userInputDiv.classList.add('userInputDiv');
userInputDiv.textContent = 'Select Rock, Paper, or Scissors';

container.appendChild(userInputDiv);


//case insensitive eg. rock, Rock, RocK
//set playerSelection's input to ignore case
//let iRock = new RegExp('rock', 'i');
//let iPaper = new RegExp('paper', 'i');
//let iScissors = new RegExp('scissors', 'i');

//console.log(playerSelection, ' this is the value of playerSelection before I call playround');

//var playerSelection === 'Rock'; 

function playRound(playerSelection, computerSelection) {
    //return a string declares the winner of round: "You lose! Paper beats Rock"
        
    //if (rock, paper), "You lose! Paper beats Rock"
    //if (paper, scissors), "You lose! Scissors beats Paper!"
    //if (scissors, rock), "You lose! Rock beats Scissors!"
    //if (paper, rock), "You win! Paper beats Rock!"
    //if (scissors, paper), "You win! Scissors beats Paper!"
    //if (rock, scissors), "You win! Rock beats Scissors!"

    //***playerSelection === iRock will not work since they are not the same thing 
    //***iRock.test(playerSelection) is the way to go
    //no longer need user's string input, because user will just click buttons
    if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        singleResultsText = 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        singleResultsText = 'You lose! Scissors beats Paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        singleResultsText = 'You lose! Rock beats Scissors!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        singleResultsText = 'You win! Paper beats Rock!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        singleResultsText = 'You win! Scissors beats Paper!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        singleResultsText = 'You win! Rock beats Scissors!';
    } else if (playerSelection === computerSelection) {
        singleResultsText = 'Draw! Select again!';
    } else (console.log('Error in function playRound(playerSelection, computerSelection)!!'))
}

//call playRound() only when RPS button is clicked
//if not, don't let playRound() operate
//if (event.target.id === 'Rock' || event.target.id === 'Paper' || event.target.id === 'Scissors') {
    //playRound(
//} else { } //don't let playRound() operate


//playRound();

//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound());

//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));  

//DOM manipulation
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    //for each button, we add a 'click' listener
    button.addEventListener('click', (e) => {
    //console.log(e.target.textContent);
        if (e.target.textContent === 'Rock') {
            playerSelection = 'Rock';
        } else if (e.target.textContent === 'Paper') {
            playerSelection = 'Paper';
        } else if (e.target.textContent === 'Scissors') {
            playerSelection = 'Scissors';
        } else (console.log('Error in button.addEventListener!!'))
        playRound(playerSelection, computerSelection);
    //change console.log() into non-console.log()
        //return value of playerSelection
        return playerSelection;
    });
});


//console.log(e.target.textContent === 'Rock');

//console.log(buttons.forEach()); --> r-p-s2.js:85 Uncaught TypeError: undefined is not a function

function game() {
    //console.log(playerSelection, 'player');
    //console.log(computerSelection, 'computer');
    //prompt('Input "rock", "paper, or "scissors."');
    //console.log(playRound(playerSelection, computerSelection));
    //change prompt and console.log into DOM methods
    //use .forEach method to iterate thru each button
    playRound(playerSelection, computerSelection);
};

game();

//console.log(game()); --> undefined


//one player reach 5 points => announce winner and running score
//1. use for loop to add points until one player hit 5 points
var currentScorePlayer = '';
function addPointPlayer() {
    for (let i=0; i<5; i++) {
        currentScorePlayer += 1;
    };
};

var currentScoreComputer = '';
function addPointComputer() {
    for (let i=0; i<5; i++) {
        currentScoreComputer += 1;
    };
};

//2. use if else statement to add point according to different comination
if (playerSelection === 'Rock' && computerSelection === 'Paper'){
    addPointComputer();
} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    addPointComputer();
} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    addPointComputer();
} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    addPointPlayer();
} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    addPointPlayer();
} else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    addPointPlayer();
} else (console.log('Error in if else statement of addPointComputer() & addPointPlayer()!!'))

//3. when one player hit 5 points, announce winner and final score
function displayResults() {
    if (currentScorePlayer === 5) {
        finalResultsText = 'You are the winner! You have saved the world!\n' + 
        'Score: You - 5\n Monster - ${currentScoreComputer}';
    };

    if (currentScoreComputer === 5) {
        finalResultsText = 'The monster is the winner! The world is doomed!\n' + 
        'Score: You - ${currentScorePlayer}\nMonster - 5';
    };
}


//modification:
//1. In webpage, display running score and announce winner when one player hit 5 points
//2. remove pop up of small window


