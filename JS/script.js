function computerPlay() {  //RNG for comupterpick
    let num = Math.random() * 10;
    
    if (num > 6.6) {
        return 'Scissors';
    } else if (num < 3.3 ) {
        return 'Rock';
    } else {
        return 'Paper'
    }
}

function playRound(playerSelection, computerSelection = computerPlay()) { //RPS initially written for prompts from user
    let cleanPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    
    if (cleanPlayerSelection == computerSelection) {
        return "It's a tie!";
    } else if (cleanPlayerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper covers Rock.';
    } else if (cleanPlayerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock breaks Scissors.';
    } else if (cleanPlayerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You Win! Paper covers Rock.';
    } else if (cleanPlayerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You Lose! Scissors cuts Paper.';
    } else if (cleanPlayerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You Lose! Rock breaks Scissors.';
    } else if (cleanPlayerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You Win! Scissors cut Paper.';
    }  else {
        return "That's a forfeit! You have to choose Rock, Paper, or Scissors!";
    } 
}
let playerScore = 0;
let computerScore = 0;

function playGame(){ //Uses button result for scoring and goes up to 5 for winner
    let roundResult = results.textContent
    if (roundResult.includes('Win')) {
        ++playerScore;
        scoreBoard.textContent = `You have ${playerScore} and your opponent has ${computerScore}`;
        } else if (roundResult.includes('Lose')) {
            ++computerScore
            scoreBoard.textContent = `You have ${playerScore} and your opponent has ${computerScore}`;
        } else if (roundResult.includes('choose')) {
            ++computerScore
            scoreBoard.textContent = `You have ${playerScore} and your opponent has ${computerScore}`;
        } else {
            scoreBoard.textContent = `You have ${playerScore} and your opponent has ${computerScore}`;
        }
    
    if (playerScore == 5) {
        scoreBoard.textContent = `You win the game! Final Score: Your ${playerScore} to your opponent's ${computerScore}.`;
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore == 5)   {
        scoreBoard.textContent = `You lose the game! Final Score: Your ${playerScore} to your opponent's ${computerScore}.`;
        playerScore = 0;
        computerScore = 0;
    }

    

}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', function(){ 
    results.textContent = (playRound('rock', computerPlay()));
    playGame();
});//anon function necessary in order for arguments in playRound. playGame func allows presses to dictate rounds going

paperBtn.addEventListener('click', function(){
    results.textContent = (playRound('paper', computerPlay()));
    playGame();
});

scissorBtn.addEventListener('click', function(){
    results.textContent = (playRound('scissors', computerPlay()));
    playGame();
});

const results = document.querySelector('.results');
const scoreBoard = document.querySelector('.scoreBoard');