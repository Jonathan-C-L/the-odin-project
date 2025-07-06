import { ImageCarousel } from "./image-carousel";
import { CreateCard, CreateOpenTimeCard } from "./info-card.js";
export {DisplayHome};

const content = document.querySelector("#content");

function DisplayHome(){
    ImageCarousel();
    Location();
    Description();
    Hours();
}
function Description(){
    const description = CreateCard("Vina's Kitchen", "Specialities in Asian cuisine, fries, baked goods, and fruits!");
    description.classList.add("description");
    content.appendChild(description);
}
function Hours(){
    const hours = CreateOpenTimeCard("Opening Hours", "Closed", "8am - 10pm", "8am - 10pm","8am - 10pm","8am - 10pm","8am - 10pm", "8am - 10pm");
    hours.classList.add("hours");
    content.appendChild(hours);
}
function Location(){
    const location = CreateCard("Location", "12345 67St NW Edmonton, AB, CA");
    location.classList.add("location");
    content.appendChild(location);
}
