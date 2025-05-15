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

    // get user choice
    const computerChoice = getComputerChoice();
    console.log(`Computer choice was ${RPS[computerChoice]}`);
    getUserChoice(computerChoice);

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

function getUserChoice(computerChoice){
    const user = document.querySelector(".user-selection");
    const choice = document.querySelectorAll("button");

    // choice made
    for(let i = 0; i < choice.length; i++){
        choice[i].onclick = () =>{
            console.log(`User choice was ${RPS[i]}`);
            // only displays the matchup if user has made a choice
            playRound(computerChoice, i);
        }
    }
}

function playRound(computer, user){
    const matchup = document.querySelector(".matchup");
    const choice = document.querySelector(".user-img");
    const comp = document.querySelector(".bot-img"); 

    // displaying the images for the user and computer choices, respectively
    choice.src = `./images/${RPS[user]}.png`;
    choice.alt = `${RPS[user]}`;
    comp.src = `./images/${RPS[computer]}.png`;
    comp.alt = `${RPS[computer]}`
}
