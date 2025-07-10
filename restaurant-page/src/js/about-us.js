import { CreateCard } from "./info-card";
export {About};

const content = document.querySelector("#content");

function About(){
    content.innerHTML = "";

    const about = CreateCard("About Us", "This is a personal page dedicated to Vina! Vina is a young and aspiring entrepeneur with a knack for cooking. She's an Edmontonian, born and raised, and food cooking reflects the deep rooted tradiations of Hong Kong cooking that has adapted from years of immigration in Canada. Check out the photos of her previous works of art on the home page!");
    about.classList.add("about-page");

    content.appendChild(about);
}