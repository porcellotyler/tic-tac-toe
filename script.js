var turnCounter = 1;

function increaseTurnCounter() {
    turnCounter = turnCounter + 1;
    return turnCounter
};

const gameFlow = (() => {
   
   var gameBoard = (() => {
        let boardDiv1 = document.getElementById("tile-1");
        let boardDiv2 = document.getElementById("tile-2");
        let boardDiv3 = document.getElementById("tile-3");
        let boardDiv4 = document.getElementById("tile-4");
        let boardDiv5 = document.getElementById("tile-5");
        let boardDiv6 = document.getElementById("tile-6");
        let boardDiv7 = document.getElementById("tile-7");
        let boardDiv8 = document.getElementById("tile-8");
        let boardDiv9 = document.getElementById("tile-9");

        let boardDivs = [boardDiv1, boardDiv2, boardDiv3, boardDiv4, boardDiv5, boardDiv6, boardDiv7, boardDiv8, boardDiv9];

        let board = [boardDiv1.innerText, boardDiv2.innerText, boardDiv3.innerText, boardDiv4.innerText, boardDiv5.innerText, boardDiv6.innerText, boardDiv7.innerText, boardDiv8.innerText, boardDiv9.innerText];

        return {board, boardDivs};
    })();

    const displayController = (() => {
        for (let i = 1; i < 10; i++) {
            let tile = document.getElementById(`tile-${i}`);
            tile.addEventListener("click", function() {
                if (tile.innerText == 'X' || tile.innerText == 'O') {
                    //do nothing if tile has an X or O already
                } else {
                    checkWho(tile, turnCounter, i)
                };
        })};

        function checkWho(tile, turnCounter, tileNum) {
            if (turnCounter % 2 === 0) {
                let marker = 'O'
                increaseTurnCounter();
                return changeTile(tile, marker, tileNum)
            } else if (turnCounter % 2 != 0) {
                let marker = 'X'
                increaseTurnCounter();
                return changeTile(tile, marker, tileNum)
            };
        };

        function changeTile(tile, marker, tileNum) {
            tile.innerText = `${marker}`;
            
            let arrayLocation = tileNum - 1;

            return updateArray(arrayLocation, marker)
        };

        function updateArray(location, marker) {
            gameBoard.board.splice(location, 1, marker)
        };

        return
    })();

    const playerFactory = (name, marker) => {
        return {name, marker};
    };

    let player1 = playerFactory('bob', 'X');
    let player2 = playerFactory('john', 'O');

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