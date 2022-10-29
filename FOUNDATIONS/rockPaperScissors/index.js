
const choices = ['rock', 'paper', 'scissors']

let getComputerChoice = () => {
    let output = choices[Math.floor(Math.random()*choices.length)]
    console.log(output)
    return output
}

let playRound = (playerSelection, computerSelection)=> {
    let playerIncrement = 0
    let computerIncrement = 0
    if ((playerSelection ==='rock' && computerSelection === 'scissors') || (playerSelection ==='paper' && computerSelection === 'rock') || (playerSelection ==='scissors' && computerSelection === 'paper')) {
        alert(`You win, ${playerSelection} beats ${computerSelection}!`)
        playerIncrement = 1
    }
    else if ((computerSelection ==='rock' && playerSelection === 'scissors') || (computerSelection ==='paper' && playerSelection === 'rock') || (computerSelection ==='scissors' && playerSelection === 'paper')) {
        alert(`You lose, ${computerSelection} beats ${playerSelection}!`)
        computerIncrement = 1
}   else {
        alert("It's a draw!")
    }
    return [playerIncrement, computerIncrement]
}

let game = () => {
    alert("Okay, best of 3 wins")
    let playerScore = 0
    let computerScore = 0
    let playerSelection;
    while (playerScore<2 && computerScore<2) {
        console.log(playerScore<2)
        playerSelection = prompt("Type in rock, paper, or scissors").toLowerCase().trim()
        while (choices.includes(playerSelection)===false) {
            playerSelection = prompt("Make a valid choice").toLowerCase().trim()
        }
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        playerScore+=result[0]
        console.log(playerScore)
        computerScore+=result[1]
        console.log(computerScore)
    }
    if (playerScore > computerScore) {
        alert(`Congrats you are victorious. Your score ${playerScore} vs Computer score ${computerScore}!`)
    }
    else {
        alert(`Sorry you lost. Your score ${playerScore} vs Computer score ${computerScore}!`)
    }
    
}