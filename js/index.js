const gameBoard = (()=>{
    // [X, X, X,
    //  X, X, X,
    //  X, X, X];
    let _board = Array(9);

    const reset = () => {
        for (let i = 0; i < _board.length; i++) {
            _board[i] = "";
        }
    }

    const getIndex = (index) => {
        return _board[index];
    }

    const setIndex = (index,sign) => {
        _board[index] = sign;
    }

    return {reset, getIndex, setIndex};
})();

const player = (sign) => {
    return {sign};
};

const displayControl = (()=>{
    // 
    let _round = 1;
    let _player1 = player("X");
    let _player2 = player("O");

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach((card)=>{
        card.addEventListener("click",()=>{

            const index = card.dataset.index;
            let symbol = _round % 2 === 0 ? _player2.sign : _player1.sign;
            gameBoard.setIndex(index,symbol);
            displayBoard();
            _round++;

        });
    });

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

