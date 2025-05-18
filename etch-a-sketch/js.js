const defaultSize = 16;

// onload
window.onload = () =>{
    const squares = document.querySelectorAll(".grid");

    // creating the 16x16 grid of squares (only on initial load)
    generateGrid(defaultSize, defaultSize);

    // drawing on the canvas
    squares.forEach((square)=>{
        square.addEventListener("mouseover", drawing);
    });

    // reset button
    const button = document.querySelector(".reset");
    button.addEventListener("click", reset);
};

function reset(){
    const gridContainer = document.querySelector(".container");

    // remove old grid
    gridContainer.innerHTML = "";

    let newSize = window.prompt("Specify the size of the new canvas: ", 16);
    if(newSize > 100){
        window.alert("The size cannot exceed 100!");
        reset();
    }

    // regenerate grid with specified size
    generateGrid(newSize, newSize);
}

function generateGrid(rows, columns){
    const gridContainer = document.querySelector(".container");

    for (col = 0; col < columns; col++){
        const newCol = document.createElement("div");
        newCol.classList.add("col");

        for(row = 0; row < rows; row++){
            const newRow = document.createElement("div");

            newRow.classList.add("grid");
            newRow.style.height = `${500/rows}px`;
            newCol.appendChild(newRow);
        }
        gridContainer.appendChild(newCol);
    }
}

function drawing(){
    this.classList.add("drawn");
    console.log("square changed to drawn");
}