/**************global items*****************/
console.log("Hello world!");
preloadImages = [];

/****************event handler**************/
window.onload = () => { 
    // variables
    const choice = document.querySelectorAll("button");
    const user = document.querySelector(".user-selection");

    
    // preloading images
    imgInit();

    // get user choice
    getUserChoice();

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

    user.style.display = "flex";

    // choice made
    for(let i = 0; i < choice.length; i++){
        choice[i].onclick = () =>{
            user.style.display = "none";
            if(i == 0){
                console.log("user chose rock");
                return 0;
            }
            else if (i == 1){
                console.log("user chose paper");
                return 1;
            }
            else{
                console.log("user chose scissors")
                return 2;
            }
        }
    }
}

function playRound(){
    const matchup = document.querySelector(".matchup");
    matchup.style.display = "flex";

}
