// exports
export {ImageCarousel, images};
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";

// variables
let images = [];
const body = document.querySelector("#content");

// factory functions
function NewImage(name, src){
    let image = new Image();
    image.src = src;
    return {name, image};
}


function ImageCarousel(){
    body.textContent = "HELLO THERE";
    console.log("content js is working");
    LoadImages(4);
}

function LoadImages(imageCount){
    images.push(food1);
    images.push(food2);
    images.push(food3);
    images.push(food4);
}