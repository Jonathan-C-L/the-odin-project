import "./styles.css";
import {ImageCarousel, DisplayHome} from "./js/home.js";
import { addGlobalEventListener } from "./js/event-listener.js";

const buttons = document.querySelector(".buttons");

ImageCarousel();
DisplayHome();

addGlobalEventListener("click", "button", buttons, e =>{
    if(e.target.classList.value == "home"){
        console.log("home was pressed");
    }
    if(e.target.classList.value == "menu"){
        console.log("menu was pressed");
    }
    if(e.target.classList.value == "about"){
        console.log("about was pressed");
    }
});


