let gridSize = 16;

const grid = document.querySelector(".grid-container");

createGrid(gridSize);

function createGrid(size) {

    for (i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridRow-container";
        gridRow.style.display = "flex";
        gridRow.style.alignItems = "stretch"
        gridRow.style.justifyContent = "stretch"
        gridRow.style.height = "50px"
        gridRow.style.width = "800px"
        gridRow.style.flexGrow = "1"
        grid.appendChild(gridRow);
    
        for (j = 0; j < size; j++) {
            const gridBlock = document.createElement("div");
            gridBlock.className = "grid-block";
            gridBlock.style.border = "1px solid black";
            gridBlock.style.flexGrow = "1";
            //gridBlock.style.height = "50px";
            //gridBlock.style.width = "50px";
            gridRow.appendChild(gridBlock);
        }
    
    }
}

function deleteGrid() {

    let existingGrid = document.querySelectorAll(".gridRow-container");

    for (let item of existingGrid) {
        item.remove();
    }
}



addEventListener("mouseover", (event) => {

    const hoveredBlock = document.elementFromPoint(event.clientX, event.clientY);
    
    if (hoveredBlock.className == "grid-block") {
        hoveredBlock.style.backgroundColor = "black";
    }
    
});

const btn = document.querySelector(".grid-button");

btn.addEventListener("click", () => {
    gridSize = prompt("Select a Grid Size");
    
    deleteGrid();
    createGrid(gridSize);
});