console.log("Welcome to tic tac toe!");


// factory functions
function createGameboard(){
    let board = [
        ['_', '_', '_'], 
        ['_', '_', '_'], 
        ['_', '_', '_']
    ];

    const pickPosition = (x, y, player) => {
        // validate that position chosen is valid - positions < 0 automatically throw error
        if(x < 3 && y < 3){
            (board[x][y] === '_')?board[x][y] = player.mark:console.log("Position is already taken!");
        }
        else{
            console.log("Position must be between 0 and 2!");
        }

        // display board
        console.log(board[0][0] + ` | ` + board[0][1] + ` | ` + board[0][2]);
        console.log(board[1][0] + ` | ` + board[1][1] + ` | ` + board[1][2]);
        console.log(board[2][0] + ` | ` + board[2][1] + ` | ` + board[2][2]);
        
        // winner check
        if(
            board[0][0] == player.mark && board[1][0] == player.mark && board[2][0] == player.mark ||
            board[0][1] == player.mark && board[1][1] == player.mark && board[2][1] == player.mark ||
            board[0][2] == player.mark && board[1][2] == player.mark && board[2][2] == player.mark ||
            board[0][0] == player.mark && board[1][1] == player.mark && board[2][2] == player.mark ||
            board[2][0] == player.mark && board[1][1] == player.mark && board[0][2] == player.mark
        ){
            console.log(`${player.name} is the winner!`);
        }
    };  

    return {board, pickPosition};
}

function createPlayer(name, mark){
    let score = 0;

    const getScore = () => score;
    const addScore = () => score++;

    return {name, mark, getScore, addScore};
}