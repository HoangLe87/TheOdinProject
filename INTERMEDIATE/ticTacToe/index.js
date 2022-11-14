// plyer object constructor
let Player = (name, mark, gameBoard) => {
    const play = (index) => {
        if (gameBoard[index]==undefined) {
            gameBoard[index]=mark
            document.getElementById(index).classList.toggle("customAnimation")
            return true
        }
    }
    return {name, mark, play}
}


// inital game set up
let initGame = (playerName) => {
    let gameBoard=Array(9)
    let player1 = Player(playerName, 'x', gameBoard)
    let player2 = Player('PC', 'o', gameBoard)
    return {gameBoard, player1, player2}
}

// wait function
const wait = async(ms) => {
    return new Promise(resolve=>(setTimeout(resolve, ms)))
}

// game logic
const game = (player1, player2, gameBoard) => {
    console.log(gameBoard)
    for (let i=0; i<9; i++) {
        document.getElementById(`div${i}`).addEventListener("click", async()=> {
                let player1Played = player1.play(i)
                display(gameBoard)
                console.log(gameBoard)
                if (gameOver(gameBoard)) {
                    await wait(1000)
                    endScreen(player1.name, player1.name)
                    gameBoard=Array(9)
                }
                if (player1Played) {
                    while (!gameOver(gameBoard) && !tie(gameBoard)) {
                        let index = (Math.floor(Math.random()*9))
                        if (gameBoard[index]===undefined) {
                            await wait(500)
                            player2.play(index)
                            display(gameBoard)
                            if (gameOver(gameBoard)) {
                                await wait(1000)
                                endScreen('PC', player1.name)
                                gameBoard=Array(9)
                            }
                            break
                        }
                    }
                }
                if (!gameBoard.includes(undefined) && !gameOver(gameBoard)) {
                    tieEndScreen()
                    gameBoard=Array(9)
                }
        })
    }
}

// win or lose logic
const gameOver = ((gameBoard) => {
    if ( 
        (gameBoard[0]!=undefined && gameBoard[0] === gameBoard[1] && gameBoard[2] === gameBoard[0] && gameBoard[1] === gameBoard[2]) ||
        (gameBoard[3]!=undefined && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[4] === gameBoard[5]) ||
        (gameBoard[6]!=undefined && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[7] === gameBoard[8]) ||     
        (gameBoard[0]!=undefined && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[3] === gameBoard[6]) ||  
        (gameBoard[1]!=undefined && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === gameBoard[7]) ||   
        (gameBoard[2]!=undefined && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === gameBoard[8]) ||      
        (gameBoard[0]!=undefined && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
        (gameBoard[2]!=undefined && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
        )  {
            return true
        }
})

// tie logic
const tie = (gameBoard) => {
    if ((gameBoard.length === 9) && (!gameBoard.includes(undefined))) {
        return true
    }
}

// display the array
const display = (gameBoard) => {
    for (let i=0;i<gameBoard.length; i++) {
        gameBoard[i]?document.getElementById(i).textContent=gameBoard[i]:document.getElementById(i).textContent=""
    }

}

// the start 
const ticTacToe = ((playerName) => {
    let {player1, player2, gameBoard} = initGame(playerName)
    display(gameBoard)
    game(player1, player2, gameBoard)
})

// start button function
const startGame = async() => {
    let playerName = document.getElementById("name").value
    let div = document.createElement("div")
    div.setAttribute('id', 'playerName')
    div.textContent=playerName
    let start = document.getElementById("start")
    start.textContent = `good luck`
    start.appendChild(div)
    await wait(1000)
    document.getElementById("main").classList.toggle("hidden")
    ticTacToe(playerName)
}

// wait onload for start button
window.addEventListener("load", () => {
    document.getElementById("startButton").addEventListener("click", ()=> startGame())
})

// end screen win or lose
const endScreen = (winner, player1) => {
    let message = document.createElement("div")
    if (winner === player1) {
        message.textContent=`Congrats ${winner}! You won!`
    }
    else {
        message.textContent=`Sorry, you Lost!`
    }
    
    let main = document.getElementById("main")
    main.classList.toggle('hidden')
    let start = document.getElementById("start")
    start.classList.toggle('hidden')
    let div = document.createElement("div")
    let playAgainButton = document.createElement("button")
    playAgainButton.textContent="play again"
    playAgainButton.addEventListener('click', ()=>{
        message.textContent=''
        message.classList.remove('congratulate')
        start.classList.toggle('hidden')
        main.classList.toggle('hidden')
        reset()
    })
    div.appendChild(playAgainButton)
    message.appendChild(div)
    let body = document.getElementsByTagName("BODY")[0];
    body.appendChild(message)
    message.classList.toggle('congratulate')
}


// end screen for tie
const tieEndScreen = () => {
    let message = document.createElement("div")
    message.textContent=`It is a draw!`
    let main = document.getElementById("main")
    main.classList.toggle('hidden')
    let start = document.getElementById("start")
    start.classList.toggle('hidden')
    let div = document.createElement("div")
    let playAgainButton = document.createElement("button")
    playAgainButton.textContent="play again"
    playAgainButton.addEventListener('click', ()=>{
        message.textContent=''
        message.classList.remove('congratulate')
        start.classList.toggle('hidden')
        main.classList.toggle('hidden')
        reset()
    })
    div.appendChild(playAgainButton)
    message.appendChild(div)
    let body = document.getElementsByTagName("BODY")[0];
    body.appendChild(message)
    message.classList.toggle('congratulate')
}

// play gain button
const reset = () => {
    let playerName = document.getElementById("playerName").textContent
    ticTacToe(playerName)
}
