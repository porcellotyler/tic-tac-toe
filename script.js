const gameFlow = (() => {
   
   var gameBoard = (() => {
        let board = ["test", "o", "x", "o", "x", "o", "x", "o", "x"
    //essentially want to tie the 9 board tiles to each index of the array 1-9
    ];
    
    let boardDiv1 = document.getElementById("tile-1");
    let boardDiv2 = document.getElementById("tile-2");
    let boardDiv3 = document.getElementById("tile-3");
    let boardDiv4 = document.getElementById("tile-4");
    let boardDiv5 = document.getElementById("tile-5");
    let boardDiv6 = document.getElementById("tile-6");
    let boardDiv7 = document.getElementById("tile-7");
    let boardDiv8 = document.getElementById("tile-8");
    let boardDiv9 = document.getElementById("tile-9");    

    let displayBoard = [boardDiv1, boardDiv2, boardDiv3, boardDiv4, boardDiv5, boardDiv6, boardDiv7, boardDiv8, boardDiv9];

    for (let i = 0; i < board.length; i++) {
    displayBoard[i].innerText = `${board[i]}`
    }

    return {board, displayBoard};
    })();

    const displayController = (() => {
        //could use onclick for grid divs to trigger an event pushing info to the array
        return
    })();

    const playerFactory = (letter) => {
        //maybe onclick for two letter buttons trigger tieing playerid to a letter?
        return {letter};
    };

return {gameBoard, displayController}
})();

/*
player functions allow them to mark a specific spot on the board
        tie function to DOM, let players click to place their marker
        only one player per spot

    logic checks for gameover, 3 in a row and tie 

    player name inputs
    start/restart button
    congratulations screen to winner
*/