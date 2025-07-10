// exports
export {ImageCarousel};
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";

// variables
let images = [];
const content = document.querySelector("#content");
const imageDisplay = document.createElement("div");
imageDisplay.classList.add("image-carousel");

let timerID = 0;
let imageIndex = 0;

// function
function ImageCarousel(){
    console.log("content js is working");

    // adding images to array to be rotated through
    ImageInit();
    AutoPlay();
}

function ImageInit(){
    images.push(food1, food2, food3, food4);
    // this is where the image with be displayed
    imageDisplay.setAttribute("style", `background: center / cover no-repeat url(${images[imageIndex]})`);
    // must be added to the content div 
    content.appendChild(imageDisplay);
}

function NextImage(){
    imageIndex++;
    imageIndex = (imageIndex%images.length);
    // this is where the image with be displayed
    imageDisplay.setAttribute("style", `background: center / cover no-repeat url(${images[imageIndex]})`);
}

function AutoPlay(){
    let interval = 4000;

    timerID = setInterval(NextImage, interval);
}


