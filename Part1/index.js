const board = [];

function play (clickedId) {
    
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board);

    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let midLeft = board[3]
    let midCenter = board[4]
    let midRight = board[5]
    let botLeft = board[6]
    let botCenter = board[7]
    let botRight = board[8]

    if (topLeft !== undefined && topLeft === topCenter && topLeft  === topRight){
        alert (`Player ${topLeft} won!`)
    }

    if (topLeft !== undefined && topLeft === midCenter && topLeft  === botRight){
        alert (`Player ${topLeft} won!`)
    }

    if (topLeft !== undefined && topLeft === midLeft && topLeft  === botLeft){
        alert (`Player ${topLeft} won!`)
    }

    if (topCenter !== undefined && topCenter === midCenter && topCenter  === botCenter) {
        alert (`Player ${topCenter} won!`)
    }

    if (topRight !== undefined && topRight === midCenter && topRight  === botLeft) {
        alert (`Player ${topRight} won!`)
    }
    
    if (topRight !== undefined && topRight === midRight && topRight  === botRight){
        alert (`Player ${topRight} won!`)
    }
    
    if (midLeft !== undefined && midLeft === midCenter && midLeft  === midRight) {
        alert (`Player ${midLeft} won!`)
    }   

    if (botLeft !== undefined && botLeft === botCenter && botLeft  === botRight) {
        alert (`Player ${botLeft} won!`)
    }

    let boardFull = true;

    for (let i = 0; i <= 8; i++){
        if (board[i] === undefined) {
            boardFull = false 
        }}
        if (boardFull === true) {
        alert (`Cat's game!`)
    }
}


// function newGame () {
//     boardValue.addEventListener('click', function (){
//     boardValue.remove()
// })
// }

