let Player = (name, mark, gameBoard) => {
    const play = () => {
        while ((gameBoard.length === 9) && (gameBoard.includes(undefined))) {
            let index = Math.floor(Math.random()*9)
            if  (gameBoard[index]==undefined) {
                gameBoard[index]=mark
                console.log(`${mark} at ${index}`)
                break 
            }
        }
    }
    return {name, mark, play}
}

const game = ((player1, player2, gameBoard) => {
    let i = 0;
    while ((gameBoard.length === 9) && (gameBoard.includes(undefined))) {
        if (i%2===0){
            player1.play()
            i++
        }
        else {
            player2.play()
            i++
        }
    }  
    if ((gameBoard.length === 9) && (!gameBoard.includes(undefined))) {
        console.log('game finished')
    }
})


const ticTacToe = (() => {
    let gameBoard = Array(9)
    let player1 = Player('player1', 'x', gameBoard)
    let player2 = Player('player2', 'o', gameBoard)
    game(player1,player2, gameBoard)
})()



