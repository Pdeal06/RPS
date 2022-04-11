function computerPlay() {
    let num = Math.random() * 10;
    
    if (num > 6.6) {
        return 'Scissors';
    } else if (num < 3.3 ) {
        return 'Rock';
    } else {
        return 'Paper'
    }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
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

function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        let roundResult = playRound(prompt('Rock, Paper, or Scissors'), computerPlay());
         
        if (roundResult.includes('Win')) {
            ++playerScore;
            console.log(`${roundResult} You have ${playerScore} and your opponent has ${computerScore}`);
        } else if (roundResult.includes('Lose')) {
            ++computerScore
            console.log(`${roundResult} You have ${playerScore} and your opponent has ${computerScore}`);
        } else if (roundResult.includes('choose')) {
            ++computerScore
            console.log(`${roundResult} You have ${playerScore} and your opponent has ${computerScore}`);
        } else {
            console.log(`${roundResult} You have ${playerScore} and your opponent has ${computerScore}`);
        }
    }
}