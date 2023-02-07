const gameBoard = (()=>{
    // [[X, X, X],
    //  [X, X, X],
    //  [X, X, X]];
    let board = ['X','X','X','O','O','O','X','X','X'];

    return {board};
})();

const displayControl = (()=>{

})();

const player = (name,shape) => {

    return {name,shape};
};

function displayGameboard(){
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach((card)=>{
        const index = card.dataset.index;
        console.log(gameBoard.board[index])

        card.textContent = gameBoard.board[index];
    })

};
