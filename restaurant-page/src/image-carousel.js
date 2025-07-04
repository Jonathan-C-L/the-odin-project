// exports
export {ImageCarousel};

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
}

function LoadImages(){
    
}