export {CreateCard, CreateOpenTimeCard, AddMenuItems};

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
function AddMenuItems(title, description, price){
    const item = document.createElement("div");
    const displayTitle = document.createElement("h5");
    const itemDescription = document.createElement("p");
    const displayPrice = document.createElement("span");

    displayTitle.textContent = title;
    itemDescription.textContent = description;
    displayPrice.textContent = "$" + price;

    item.appendChild(displayTitle);
    item.appendChild(itemDescription);
    item.appendChild(displayPrice);
    item.classList.add("item");

    return item;
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
    sun.textContent = "Sunday:      " + sunday;
    mon.textContent = "Monday:      " + monday;
    tues.textContent = "Tuesday:    " + tuesday;
    wed.textContent = "Wednesday:   " + wednesday;
    thurs.textContent = "Thursday:  " + thursday;
    fri.textContent = "Friday:      " + friday;
    sat.textContent = "Saturday:    " + saturday;

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