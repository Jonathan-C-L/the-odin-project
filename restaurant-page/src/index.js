import "./styles.css";
import {DisplayHome} from "./js/home.js";
import { addGlobalEventListener } from "./js/event-listener.js";
import { Menu } from "./js/menu.js";
import {About} from "./js/about-us.js";

const buttons = document.querySelector(".buttons");

DisplayHome();

addGlobalEventListener("click", "button", buttons, e =>{
    if(e.target.classList.value == "home"){
        console.log("home was pressed");
        DisplayHome();
    }
    if(e.target.classList.value == "menu"){
        console.log("menu was pressed");
        Menu();

    }
    if(e.target.classList.value == "about"){
        console.log("about was pressed");
        About();
    }
});


