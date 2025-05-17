
// onload
window.onload = () =>{
    const main = document.querySelector(".container");
    const columns = 16, rows = 16;

    // creating the 16x16 grid by creating each column, then populating the rows
    for (col = 0; col < columns; col++){
        const newCol = document.createElement("div");

        for(row = 0; row < rows; row++){
            const newRow = document.createElement("div");

            newRow.classList.add("grid", `${col}${row}`);
            newCol.appendChild(newRow);
        }
        main.appendChild(newCol);
    }

    // hover event
    const squares = document.querySelectorAll(".grid");
    squares.forEach((square)=>{
        square.addEventListener("mouseover", drawing);
    });
};



function drawing(){
    this.classList.add("drawn");
    console.log("square changed to drawn");
}