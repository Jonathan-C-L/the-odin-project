let columns = rows = 16;

// onload
window.onload = () =>{

    // creating the 16x16 grid of squares (only on initial load)
    generateGrid(rows, columns);

    // drawing on the canvas
    const squares = document.querySelectorAll(".grid");
    squares.forEach((square)=>{
        square.addEventListener("mouseover", drawing);
    });

    // reset button
    const button = document.querySelector(".reset");
    button.addEventListener("click", reset);
};

function reset(){
    // remove old grid
    const container = document.querySelectorAll(".container");

    for (col = 0; col < columns; col++){
        const prevCol = document.createElement("div");

        for(row = 0; row < rows; row++){
            const prevRow = document.createElement("div");

            prevRow.classList.add("grid", `${col}${row}`);
            prevCol.appendChild(prevRow);
        }
    }


    let columns = rows = window.prompt("Specify the size of the new canvas: ", 16);


    // regenerate grid with specified size
    generateGrid(rows, columns);
    
}

function generateGrid(rows, columns){
    const main = document.querySelector(".container");

    for (col = 0; col < columns; col++){
        const newCol = document.createElement("div");

        for(row = 0; row < rows; row++){
            const newRow = document.createElement("div");

            newRow.classList.add("grid", `${col}${row}`);
            newCol.appendChild(newRow);
        }
        main.appendChild(newCol);
    }
}

function deleteGrid(){

}

function drawing(){
    this.classList.add("drawn");
    console.log("square changed to drawn");
}