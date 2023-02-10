const gameBoard = (()=>{
    // [X, X, X,
    //  X, X, X,
    //  X, X, X];
    let _board = Array(9);

    // Reset board to blank
    const reset = () => {
        for (let i = 0; i < _board.length; i++) {
            _board[i] = "";
        }
    }

    // Get the value of the index of the board
    const getIndex = (index) => {
        return _board[index];
    }

    // Set the value of the index of the board with the specified sign
    const setIndex = (index,sign) => {
        _board[index] = sign;
    }

    return {reset, getIndex, setIndex};
})();

// Function to create a player with a specific sign
const player = (sign) => {
    return {sign};
};

const gameController = (()=>{
    // Initialize the round and player symbols
    let _round = 1;
    let _player1 = player("X");
    let _player2 = player("O");

    // Get the sign of the current player
    const getCurrentPlayerSign = function(){
        return _round % 2 === 0 ? _player2.sign : _player1.sign;
    };

    // Script to play a single round of tic-tac-toe
    const playRound = function(index){
        gameBoard.setIndex(index,getCurrentPlayerSign());
        displayControl.displayBoard();
        checkGameStatus(index);
        _round++;
    };

    // Check if the game is over
    const checkGameStatus = function(index){
        const _winConditions =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];

        let possibleChecks = _winConditions.filter((x)=>{return x.includes(Number(index))});

        for (let i = 0; i < possibleChecks.length; i++) {
            const element = possibleChecks[i];
    
            if(element.every((elem)=>{return gameBoard.getIndex(elem)===getCurrentPlayerSign()})){
                console.log(`${getCurrentPlayerSign()} Won`)
            }
        }
    };

    return {getCurrentPlayerSign,playRound,checkGameStatus};
})();

const displayControl = (()=>{

    const gameCards = document.querySelectorAll(".game-card");

    // Add listener to each game cell for when it is clicked
    gameCards.forEach((card)=>{
        card.addEventListener("click",()=>{
            const index = card.dataset.index;
            if (gameBoard.getIndex(index) == undefined){
                gameController.playRound(index);
            } 
        });
    });

    // Function to display the game board
    const displayBoard = function() {
        gameCards.forEach((card)=>{
            const index = card.dataset.index;
            card.textContent = gameBoard.getIndex(index);
        });
    };

    // const resetBtn = document.querySelector(".reset-btn");
    // resetBtn.addEventListener("click",()=>{
    //     gameBoard.reset();
    //     displayBoard();
    // });

    return{displayBoard};
})();

