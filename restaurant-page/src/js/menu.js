import { AddMenuItems } from "./info-card";
export { Menu };

const content = document.querySelector("#content");
const menu = document.createElement("div");
menu.classList.add("menu-page"); 

const appetizers = [NewItem("Fries", "Cripsy and fluffy, all at the same time!", "3.50"), NewItem("Salad", "Fresh, crunchy, all with a tangy dressing!", "4.00"), NewItem("Steak bites", "Savoury and tender goodness!", "10.50")];
const mains = [NewItem("Spaghetti", "Authentic Italian cuisine with an Hong Kong twist!", "14.99"), NewItem("Steamed fish", "Light soy-sauce flavoured fish that goes amazingly with fresh white rice!", "12.50"), NewItem("Fried rice", "A classic Asian dish, made with the roots of Hong Kong heritage!", "10.99")];
const drinks = [NewItem("Diet coke", "n/a", "2.50"), NewItem("Sprite", "n/a", "2.50"), NewItem("Hong Kong milk tea", "n/a", "3.99")];

// factory functions
function NewItem(name, description, price){
    return {name, description, price};
}

function Menu(){
    content.innerHTML = "";
    menu.innerHTML = "";
    Appetizers();
    Mains();
    Drinks();
    content.appendChild(menu);
}
function Appetizers(){
    const card = document.createElement("div");
    card.classList.add("appetizers");
    const title = document.createElement("h3");
    title.textContent = "Appetizers";
    card.appendChild(title);

    appetizers.forEach(element =>{
        const item = AddMenuItems(element.name, element.description, element.price);
        card.appendChild(item);
    });
    menu.appendChild(card);
}
function Mains(){
    const card = document.createElement("div");
    card.classList.add("mains");
    const title = document.createElement("h3");
    title.textContent = "Mains";
    card.appendChild(title);

    mains.forEach(element =>{
        const item = AddMenuItems(element.name, element.description, element.price);
        card.appendChild(item);
    });
    menu.appendChild(card);
}
function Drinks(){
    const card = document.createElement("div");
    card.classList.add("drinks");
    const title = document.createElement("h3");
    title.textContent = "Drinks";
    card.appendChild(title);

    drinks.forEach(element =>{
        const item = AddMenuItems(element.name, element.description, element.price);
        card.appendChild(item);
    });
    menu.appendChild(card);
}