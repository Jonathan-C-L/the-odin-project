// exports
export {ImageCarousel};
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";

// variables
let images = [];
const img = document.createElement("img");
    const body = document.querySelector("#content");


// factory functions
function NewImage(src){
    let image = new Image();
    image.src = src;
    return {image};
}


function ImageCarousel(){
    body.textContent = "HELLO THERE";
    console.log("content js is working");
    
    
    let newImage = new Image();
    newImage.src = food1;
    images.push(newImage);
}
