const gameboard = createGameboard();
const player1 = createPlayer('', 'x');
const player2 = createPlayer('', 'o');

window.addEventListener("load", () =>{
    const button = document.querySelector(".submit");
    const playerInput = document.querySelector(".player-input");
    const player1Input = document.querySelector("#player1-input");
    const player2Input = document.querySelector("#player2-input");
    const playerDisplay = document.querySelector(".player-display");
    const player1Display = document.querySelector(".player1");
    const player2Display = document.querySelector(".player2");
    const board = document.querySelectorAll(".board");

    console.log("Welcome to tic tac toe!");

    button.addEventListener("click", function(){        
        if(player1Input.value != "" && player2Input.value != ""){
            // adding user input into UI
            player1.name = player1Input.value;
            player2.name = player2Input.value;
            player1Display.textContent = "Player 1: " + player1.name;
            player2Display.textContent = "Player 2: " + player2.name;
            // hiding input elements
            playerInput.classList.toggle("hidden");
            button.classList.toggle("hidden");
            playerDisplay.classList.toggle("hidden");
        }
        else{
            window.alert("Please input names for each player!")
        }
    });

    for(let i = 0; i < board.length; i++){
        board[i].addEventListener("click", function(){
            (gameboard.getTurn()%2 == 0 )?gameboard.pickPosition(i, player1):gameboard.pickPosition(i, player2);
            gameboard.changeTurn();
            DisplayBoard();
        });
    }

});

// factory functions
function createGameboard(){
    // 2D array for the gameboard
    let board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

    let playerTurn = 0;

    const changeTurn = () => playerTurn++;
    const getTurn = () => playerTurn;

    const pickPosition = (position, player) => {
        (board[position] === '_')?board[position] = player.mark:console.log("Position is already taken!");
    };  

    return {board, getTurn, changeTurn, pickPosition};
}

function createPlayer(name, mark){
    let score = 0;

    const getScore = () => score;
    const giveScore = () => score++;

    return {name, mark, getScore, giveScore};
}

// functions
function DisplayBoard(){
    const playSpace = document.querySelectorAll(".board");
    for(let i = 0; i < gameboard.board.length; i++){
        playSpace[i].classList.add(`${gameboard.board[i]}`);
    }
}

function CheckBoard(board, player){
    // winner check
    if( board[0][0] == player.mark && board[1][0] == player.mark && board[2][0] == player.mark ||
        board[0][1] == player.mark && board[1][1] == player.mark && board[2][1] == player.mark ||
        board[0][2] == player.mark && board[1][2] == player.mark && board[2][2] == player.mark ||
        board[0][0] == player.mark && board[1][1] == player.mark && board[2][2] == player.mark ||
        board[2][0] == player.mark && board[1][1] == player.mark && board[0][2] == player.mark
    ){
        console.log(`${player.name} is the winner!`);
    }
    // tie check
    let positionsLeft = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === '_'){
                positionsLeft++;
            }
        }
    }
    if(positionsLeft <= 0){
        console.log(`No more moves, tie game!`);
    }
}