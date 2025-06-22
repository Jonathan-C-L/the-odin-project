const gameboard = createGameboard();
const player1 = createPlayer('', 'x');
const player2 = createPlayer('', 'o');

window.addEventListener("load", () =>{
    const button = document.querySelector(".submit");
    const player1Input = document.querySelector("#player1-input");
    const player2Input = document.querySelector("#player2-input");    
    const board = document.querySelectorAll(".board");
    const reset = document.querySelector(".reset");

    console.log("Welcome to tic tac toe!");

    button.addEventListener("click", function(){        
        if(player1Input.value != "" && player2Input.value != ""){
            DisplayPlayers();
            gameboard.playGame();
        }
        else{
            window.alert("Please input names for each player!")
        }
    });

    // tic tac toe board 
    for(let i = 0; i < board.length; i++){
        board[i].addEventListener("click", function(){
            if(gameboard.checkGame()){
                if(gameboard.getTurn()%2 == 0){
                    gameboard.pickPosition(i, player1);
                    DisplayBoard();
                    CheckBoard(player1);
                }
                else{
                    gameboard.pickPosition(i, player2);
                    DisplayBoard();
                    CheckBoard(player2);
                }
                gameboard.changeTurn();
            }
            else{
                window.alert("Please input names for each player!");
            }
        });
    }
    reset.addEventListener("click", function(){
        gameboard.board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

        DisplayPlayers();
    });


});

// factory functions
function createGameboard(){
    // 2D array for the gameboard
    let board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let playerTurn = 0;
    let play = false;

    const playGame = () => play = true;
    const checkGame = () => play;
    const changeTurn = () => playerTurn++;
    const getTurn = () => playerTurn;
    const pickPosition = (position, player) => {
        (board[position] === '_')?board[position] = player.mark:console.log("Position is already taken!");
    };  

    return {board, getTurn, changeTurn, pickPosition, playGame, checkGame};
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
function ResetBoard(){
    const playSpace = document.querySelectorAll(".board");
    for(let i = 0; i < gameboard.board.length; i++){
        playSpace[i].classList.add(`${gameboard.board[i]}`);
    }
}

function CheckBoard(player){
    // winner check
    if( gameboard.board[0] == player.mark && gameboard.board[1] == player.mark && gameboard.board[2] == player.mark||
        gameboard.board[3] == player.mark && gameboard.board[4] == player.mark && gameboard.board[5] == player.mark||
        gameboard.board[6] == player.mark && gameboard.board[7] == player.mark && gameboard.board[8] == player.mark||
        gameboard.board[0] == player.mark && gameboard.board[3] == player.mark && gameboard.board[6] == player.mark||
        gameboard.board[1] == player.mark && gameboard.board[4] == player.mark && gameboard.board[7] == player.mark||
        gameboard.board[2] == player.mark && gameboard.board[5] == player.mark && gameboard.board[8] == player.mark||
        gameboard.board[0] == player.mark && gameboard.board[4] == player.mark && gameboard.board[8] == player.mark||
        gameboard.board[2] == player.mark && gameboard.board[4] == player.mark && gameboard.board[6] == player.mark
    ){
        player.giveScore();
        DisplayResults(`${player.name} is the winner!`);
    }
    // tie check
    let positionsLeft = 0;
    for(let i = 0; i < gameboard.board.length; i++){
        if(gameboard.board[i] === '_'){
            positionsLeft++;
        }
    }
    if(positionsLeft <= 0){
        DisplayResults(`No more moves, tie game!`);
    }
}
function DisplayResults(message){
    const playerDisplay = document.querySelector(".player-display");
    const playerResults = document.querySelector(".results-display");
    const announceResult = document.querySelector(".result-annoucement");
    const player1Result = document.querySelector(".player1.result");
    const player2Result = document.querySelector(".player2.result");

    playerDisplay.classList.toggle("hidden");
    playerResults.classList.toggle("hidden");
    announceResult.textContent = message;
    player1Result.textContent = `Player 1 score: ${player1.getScore()}`;
    player2Result.textContent = `Player 2 score: ${player2.getScore()}`;
}

function DisplayPlayers(){
    const playerInput = document.querySelector(".player-input");
    const playerDisplay = document.querySelector(".player-display");
    const player1Display = document.querySelector(".player1");
    const player2Display = document.querySelector(".player2");
    const playerResults = document.querySelector(".results-display");
    const player1Input = document.querySelector("#player1-input");
    const player2Input = document.querySelector("#player2-input"); 
    const button = document.querySelector(".submit");


    // adding user input into UI
    player1.name = player1Input.value;
    player2.name = player2Input.value;
    player1Display.textContent = "Player 1: " + player1.name;
    player2Display.textContent = "Player 2: " + player2.name;
    // hiding input elements
    button.classList.toggle("hidden");  

    playerDisplay.classList.toggle("hidden");
    if(!playerResults.classList.contains("hidden")){
        playerResults.classList.toggle("hidden");
    }
    if(!playerInput.classList.contains("hidden")){
        playerInput.classList.toggle("hidden");
    }
}