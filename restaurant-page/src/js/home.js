import { ImageCarousel } from "./image-carousel";
import { CreateCard, CreateOpenTimeCard } from "./info-card.js";
export {DisplayHome};

const content = document.querySelector("#content");
const info = document.createElement("div");
info.classList.add("info");

function DisplayHome(){
    // reset dom contents to prevent repeats
    content.innerHTML = "";
    info.innerHTML = "";
    // re-render everything
    ImageCarousel();
    Location();
    Description();
    Hours();
    content.appendChild(info);
}
function Description(){
    const description = CreateCard("Vina's Kitchen", "Specialities in Asian cuisine, fries, baked goods, and fruits! Specialities in Asian cuisine, fries, baked goods, and fruits! Specialities in Asian cuisine, fries, baked goods, and fruits! Specialities in Asian cuisine, fries, baked goods, and fruits! Specialities in Asian cuisine, fries, baked goods, and fruits!");
    description.classList.add("description");
    info.appendChild(description);
}
function Hours(){
    const hours = CreateOpenTimeCard("Opening Hours", "Closed", "8am - 10pm", "8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm", "8am - 10pm");
    hours.classList.add("hours");
    info.appendChild(hours);
}
function Location(){
    const location = CreateCard("Location", "12345 67St NW Edmonton, AB, CA");
    location.classList.add("location");
    info.appendChild(location);
}
