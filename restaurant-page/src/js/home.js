import { ImageCarousel } from "./image-carousel";
export {ImageCarousel, DisplayHome};

const content = document.querySelector("#content");
const homeDisplay = document.createElement("div");
homeDisplay.classList.add("display");
const description = document.createElement("div");
description.classList.add("info");

const hours = document.createElement("div");
hours.classList.add("info");
const location = document.createElement("div");
location.classList.add("info");

description.textContent = "Vina's kitchen will make your tastebuds experience a whole new world! She specializes in Asian cuisine and fries :)";
hours.textContent = "Sunday: 8:00am - 10:00pm Monday: 8:00am - 10:00pm Tuesday: 8:00am - 10:00pm";
location.textContent = "Edmonton, AB";

function DisplayHome(){
    Description();
    Hours();
    Location();
}
function Description(){
    homeDisplay.appendChild(description);
    content.appendChild(homeDisplay);
}
function Hours(){
    homeDisplay.appendChild(hours);
    content.appendChild(homeDisplay);
}
function Location(){
    homeDisplay.appendChild(location);
    content.appendChild(homeDisplay);
}
