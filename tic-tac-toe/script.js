console.log("Welcome to tic tac toe!");






// factory functions
function createGameboard(){
    let board = [,];

    const pickPosition = (x, y, mark) => {
        (board[x, y] === undefined)?board[x, y] = mark:console.log("Position is already taken!");
    };  
}

function createPlayer(name, mark){
    let score = 0;

    const getScore = () => score;
    const addScore = () => score++;

    return {name, mark, getScore, addScore};
}