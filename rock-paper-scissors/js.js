/**************global items*****************/
console.log("Hello world!");
preloadImages = [];
let userScore = 0, computerScore = 0;

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

    getUserChoice();

    document.querySelector(".reset").onclick = () =>{
        location.reload();
    }

}
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
function getComputerChoice(){
    // randomize function needs to include 2, so max was +1
    return Randomize(0, 3);
}

// randomize helper function to get random numbers between 0-2
function Randomize(min, max){
    // generates random number between min(inclusive) and max(exclusive)
    return Math.floor(Math.random()*(max-min))+min;
}

function getUserChoice(){
    const user = document.querySelector(".user-selection");
    const choice = document.querySelectorAll("button");

    // check for choice made by user
    for(let i = 0; i < choice.length; i++){
        choice[i].onclick = () =>{
            console.log(`User choice was ${RPS[i]}`);

            // generate computer choice after user choice has been made
            const computerChoice = getComputerChoice();
            console.log(`Computer choice was ${RPS[computerChoice]}`);

            // determine winner and display result
            playRound(computerChoice, i);
        }
    }
}

function playRound(computer, user){
    const score = document.querySelector(".score");
    const choice = document.querySelector(".user-img");
    const comp = document.querySelector(".bot-img"); 
    let winner = "", tie = false;

    // displaying the images for the user and computer choices, respectively
    choice.src = `./images/${RPS[user]}.png`;
    choice.alt = `${RPS[user]}`;
    comp.src = `./images/${RPS[computer]}.png`;
    comp.alt = `${RPS[computer]}`
    
    // user vs computer comparison
    // tie
    if(RPS[user] == RPS[computer]){
        window.alert(`Tie! Both played ${RPS[user]}`);
        tie = true;
    }
    // user choice is rock
    if(RPS[user] == "rock" && !tie){
        winner = (RPS[computer] == "paper")?"computer":"user";
    }
    // user choice is paper
    if(RPS[user] == "paper" && !tie){
        winner = (RPS[computer] == "scissors")?"computer":"user";
    }
    // user choice is scissors
    if(RPS[user] == "scissors" && !tie){
        winner = (RPS[computer] == "rock")?"computer":"user";
    }
    // only change score if winner has been determined
    if(winner != ""){
        if(winner == "computer"){
            window.alert(`You lose! Computer won playing ${RPS[computer]}`);
            computerScore++;
            score.textContent = `${userScore} - ${computerScore}`;
        }
        else{
            window.alert(`You won playing ${RPS[user]}!`);
            userScore++;
            score.textContent = `${userScore} - ${computerScore}`;
        }
        // reset the result so score doesn't get re-added
        winner = "";
        tie = false;
    }

    // display winner when one reaches 5 wins total
    if(userScore >= 5 || computerScore >= 5){
        (userScore >= 5)? endMatch("You"):endMatch("Computer");
    }
}

// helper function to declare winner
function endMatch(winner){
    const choices = document.querySelector(".user-selection");
    const matchup = document.querySelector(".matchup");
    const result = document.querySelector(".result");
    const resultMessage = document.querySelector(".result-message");

    // remove play space
    choices.style.display = "none";
    matchup.style.display = "none";

    // show end message
    result.style.display = "block";
    resultMessage.textContent = `${winner} won!`;

}
