/**************global items*****************/
console.log("Hello world!");
preloadImages = [];
const buttons = document.querySelector(".buttons-container");
const choices = document.querySelector(".user-selection");
const score = document.querySelector(".score");
const choiceImg = document.querySelector(".user-img");
const comp = document.querySelector(".bot-img"); 
const matchup = document.querySelector(".matchup");
const result = document.querySelector(".result");
const resultMessage = document.querySelector(".result-message");

/******************Classes******************/
class Player {
    score = 0;
    move;

    constructor(name){
        this.name = name;
    }
    addScore(){
        return this.score++;
    }
    // min(inclusive); max(exclusive)
    pickMove(min = 0, max = 3){
        return Math.floor(Math.random()*(max-min))+min;
    }
}

/*********Rock, Paper, Scissors Enum********/
const RPS = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

/****************event handler**************/
window.onload = () => { 
    // preloading images
    imgInit();

    document.querySelector(".reset").onclick = () =>{
        location.reload();
    }
}
/***************player objects**************/
const computer = new Player("Computer");
const user = new Player("Jonathan"); 

/******************functions***************/
// preloading images
function imgInit(){
    for(let i  = 0; i < 3; i++){
        // constructing new image object for each image
        let tempImage = new Image();
        // using switch statements to try it out - setting src and alt
        switch(i){
            case 0:
                tempImage.src = `./images/paper.png`
                tempImage.alt = `paper`
            break;
            case 1:
                tempImage.src = `./images/rock.png`
                tempImage.alt = `rock`
            break;
            case 2:
                tempImage.src = `./images/scissors.png`
                tempImage.alt = `scissors`
            break;
        }
        preloadImages.push(tempImage)
        console.log("images successfully loaded");
    }
}

addGlobalEventListener("click", ".choice", buttons, e => {
    let choice = e.target.classList.value[0];

    console.log(`User choice was ${RPS[choice]}`);
    console.log(`Computer choice was ${RPS[computer.move]}`);

    // determine winner and display result
    playRound(computer.pickMove(), choice);
});

function playRound(computerChoice, userChoice){
    let winner = "", tie = false;

    // displaying the images for the user and computer choices, respectively
    choiceImg.src = `./images/${RPS[userChoice]}.png`;
    choiceImg.alt = `${RPS[userChoice]}`;
    comp.src = `./images/${RPS[computerChoice]}.png`;
    comp.alt = `${RPS[computerChoice]}`
    
    // user vs computer comparison
    // tie
    if(RPS[userChoice] == RPS[computerChoice]){
        window.alert(`Tie! Both played ${RPS[user]}`);
        tie = true;
    }
    // user choice is rock
    if(RPS[userChoice] == "rock" && !tie){
        winner = (RPS[computerChoice] == "paper")?"computer":"user";
    }
    // user choice is paper
    if(RPS[userChoice] == "paper" && !tie){
        winner = (RPS[computerChoice] == "scissors")?"computer":"user";
    }
    // user choice is scissors
    if(RPS[userChoice] == "scissors" && !tie){
        winner = (RPS[computerChoice] == "rock")?"computer":"user";
    }
    // only change score if winner has been determined
    if(winner != ""){
        if(winner == "computer"){
            window.alert(`You lose! Computer won playing ${RPS[computerChoice]}`);
            computer.addScore();
            score.textContent = `${user.score} - ${computer.score}`;
        }
        else{
            window.alert(`You won playing ${RPS[userChoice]}!`);
            user.addScore();
            score.textContent = `${user.score} - ${computer.score}`;
        }
        // reset the result so score doesn't get re-added
        winner = "";
        tie = false;
    }

    // display winner when one reaches 5 wins total
    if(user.score >= 5 || computer.score >= 5){
        (user.score >= 5)? endMatch("You"):endMatch("Computer");
    }
}

// helper function to declare winner
function endMatch(winner){

    // remove play space
    choices.style.display = "none";
    matchup.style.display = "none";

    // show end message
    result.style.display = "block";
    resultMessage.textContent = `${winner} won!`;
}

// event delegation function
function addGlobalEventListener(type, selector, parent = document, callback){
    parent.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}
