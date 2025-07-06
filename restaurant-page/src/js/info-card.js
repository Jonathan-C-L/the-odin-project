export {CreateCard, CreateOpenTimeCard};

// functions
function CreateCard(title, description){
    const card = document.createElement("div");
    const displayTitle = document.createElement("h3");
    const displayDescription = document.createElement("p");

    displayTitle.textContent = title;
    displayDescription.textContent = description;

    card.appendChild(displayTitle);
    card.appendChild(displayDescription);
    card.classList.add("card");

    return card;
}
function CreateOpenTimeCard(title, sunday, monday, tuesday, wednesday, thursday, friday, saturday){
    const card = document.createElement("div");
    const displayTitle = document.createElement("h3");
    const sun = document.createElement("p");
    const mon = document.createElement("p");
    const tues = document.createElement("p");
    const wed = document.createElement("p");
    const thurs = document.createElement("p");
    const fri = document.createElement("p");
    const sat = document.createElement("p");

    displayTitle.textContent = title;
    sun.textContent = sunday;
    mon.textContent = monday;
    tues.textContent = tuesday;
    wed.textContent = wednesday;
    thurs.textContent = thursday;
    fri.textContent = friday;
    sat.textContent = saturday;

    card.appendChild(displayTitle);
    card.appendChild(sun);
    card.appendChild(mon);
    card.appendChild(tues);
    card.appendChild(wed);
    card.appendChild(thurs);
    card.appendChild(fri);
    card.appendChild(sat);
    card.classList.add("card");

    return card;
}