const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChocie;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChocie = e.target.id;
    userChoiceDisplay.innerHTML = userChocie;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'paper';
    }

    if (randomNumber === 3) {
        computerChoice = 'scissor';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChocie) {
        result = 'It\'s a draw';
    }

    if(computerChoice === 'rock' && userChocie === 'scissor') {
        result = 'you lose';
    }
    if(computerChoice === 'scissor' && userChocie === 'rock') {
        result = 'you win';
    }
    if(computerChoice === 'paper' && userChocie === 'rock') {
        result = 'you lose';
    }
    if(computerChoice === 'rock' && userChocie === 'paper') {
        result = 'you win';
    }
    if(computerChoice === 'paper' && userChocie === 'scissor') {
        result = 'you win';
    }
    if(computerChoice === 'scissor' && userChocie === 'paper') {
        result = 'you lose';
    }
    resultDisplay.innerHTML = result;
}