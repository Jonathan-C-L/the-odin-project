console.log("Hello world!");
preloadImages = [];
/****************event handler**************/
window.onload = () => { 
    // preloading images
    imgInit();

    // get user choice

}
/******************functions***************/
// preloading images
function imgInit(){
    for(let i  = 0; i < 3; i++){
        // constructing new image object for each image
        let tempImage = new Image();
        // using switch statements to try it out
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

}

function getUserChoice(){
    document.getElementsByClassName("user-selection").
}

function playRound(){

}
