var turnCounter = 1;

function increaseTurnCounter() {
    turnCounter = turnCounter + 1;
    return turnCounter
};

function resetTurnCounter() {
    turnCounter = 1;
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

    function winChecker() {
        let board = gameBoard.board;

        if (board.at(0) === 'X' && board.at(1) === 'X' && board.at(2) === 'X') {
            gameWon('X');
        } else if (board.at(0) === 'O' && board.at(1) === 'O' && board.at(2) === 'O') {
            gameWon('O');
        } else if (board.at(3) === 'X' && board.at(4) === 'X' && board.at(5) === 'X') {
            gameWon('X');
        } else if (board.at(3) === 'O' && board.at(4) === 'O' && board.at(5) === 'O') {
            gameWon('O');
        } else if (board.at(6) === 'X' && board.at(7) === 'X' && board.at(8) === 'X') {
            gameWon('X');
        } else if (board.at(6) === 'O' && board.at(7) === 'O' && board.at(8) === 'O') {
            gameWon('O');
        } else if (board.at(0) === 'X' && board.at(3) === 'X' && board.at(6) === 'X') {
            gameWon('X');
        } else if (board.at(0) === 'O' && board.at(3) === 'O' && board.at(6) === 'O') {
            gameWon('O');
        } else if (board.at(1) === 'X' && board.at(4) === 'X' && board.at(7) === 'X') {
            gameWon('X');
        } else if (board.at(1) === 'O' && board.at(4) === 'O' && board.at(7) === 'O') {
            gameWon('O');
        } else if (board.at(2) === 'X' && board.at(5) === 'X' && board.at(8) === 'X') {
            gameWon('X');
        } else if (board.at(2) === 'O' && board.at(5) === 'O' && board.at(8) === 'O') {
            gameWon('O');
        } else if (board.at(0) === 'X' && board.at(4) === 'X' && board.at(8) === 'X') {
            gameWon('X');
        } else if (board.at(0) === 'O' && board.at(4) === 'O' && board.at(8) === 'O') {
            gameWon('O');
        } else if (board.at(2) === 'X' && board.at(4) === 'X' && board.at(6) === 'X') {
            gameWon('X');
        } else if (board.at(2) === 'O' && board.at(4) === 'O' && board.at(6) === 'O') {
            gameWon('O');
        } else if ((board.at(0) === 'X' || board.at(0) === 'O') && (board.at(1) === 'X' || board.at(1) === 'O') && (board.at(2) === 'X' || board.at(2) === 'O') && (board.at(3) === 'X' || board.at(3) === 'O') && (board.at(4) === 'X' || board.at(4) === 'O') && (board.at(5) === 'X' || board.at(5) === 'O') && (board.at(6) === 'X' || board.at(6) === 'O') && (board.at(7) === 'X' || board.at(7) === 'O') && (board.at(8) === 'X' || board.at(8) === 'O')) {
            gameTie();
        };
    };

    function gameWon(mark) {
        const container = document.getElementById("winDisplay");
        const winDisplay = document.createElement("div");
            winDisplay.innerText = `The winner is ${mark}!`;
            container.append(winDisplay);
    };

    function gameTie() {
        const container = document.getElementById("winDisplay");
        const winDisplay = document.createElement("div");
            winDisplay.innerText = `The game is a tie!`;
            container.append(winDisplay);
    };

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

        const resetButton = document.getElementById("reset-button");
            resetButton.addEventListener("click", function() { resetGame() });

        function resetGame() {
            for (let i = 1; i < 10; i++) {
                let tile = document.getElementById(`tile-${i}`);
                if (tile.innerText == 'X' || tile.innerText == 'O') {
                    tile.innerText = '';
                    let arrayLocation = i - 1;
                    updateArray(arrayLocation, '');
                    resetTurnCounter();

                    const display = document.getElementById("winDisplay");
                        display.innerHTML = '';
                }
            };
        };
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
            gameBoard.board.splice(location, 1, marker);
            winChecker();
        };

        return
    })();

    /*const startButton = document.getElementById("start-button");
        startButton.addEventListener("click", function() { startGame() });

    function startGame() {
        /* instead of a pop up input, have two inputs available for both players at all times to enter and edit their names as they would like w/o submitting anything
        
        can position each player on either side of the game board and have a message or color display which side's turn it currently is 
        */

        //append div with form asking for username
       /* const infoContainer = document.createElement("div")
            infoContainer.innerText = 'Enter your username:';

        const form = document.createElement("form");
            form.setAttribute('method','post')
            infoContainer.appendChild(form);

        const input = document.createElement("input");
            input.setAttribute('type',"text");
            input.setAttribute('name',"username");
            infoContainer.appendChild(input);

        const submit = document.createElement("button");
            submit.innerText = 'Submit';
            infoContainer.appendChild(submit);

        document.body.appendChild(infoContainer);
    }; */

    const playerFactory = (name, marker) => {
        return {name, marker};
    };

    let player1 = playerFactory('bob', 'X');
    let player2 = playerFactory('john', 'O');

return {gameBoard, displayController}
})();

/*
    start button : make player input display

    player 1 - input your name, pick your letter
    player 2 - input your name, pick your letter

    restart button, clear board and player input display

    player name inputs
    start button
*/