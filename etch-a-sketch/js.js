const defaultSize = 16;

// onload
window.onload = () =>{
    // creating the 16x16 grid of squares (only on initial load)
    generateGrid(defaultSize, defaultSize);

    draw();

    // reset button
    const button = document.querySelector(".reset");
    button.addEventListener("click", reset);
};

function reset(){
    const gridContainer = document.querySelector(".container");

    // remove old grid
    gridContainer.innerHTML = "";

    let newSize = window.prompt("Specify the size of the new canvas: ", 16);
    console.log(newSize);
    if(newSize > 100){
        window.alert("The size cannot exceed 100!");
    }
    else if(newSize <= 0){
        window.alert("The size must be greater than 0!");
        // if prompt is cancelled - regenerate at the default size
        generateGrid(defaultSize, defaultSize);
    }
    else if(newSize <= 100 && newSize > 0){
        // regenerate grid with specified size
        generateGrid(newSize, newSize);
    }
    // needs to be re-called to be able to draw again
    draw();
 
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

// drawing on the canvas
function draw(){
    const squares = document.querySelectorAll(".grid");
    squares.forEach((square)=>{
        square.addEventListener("mouseover", drawing)
    });
}