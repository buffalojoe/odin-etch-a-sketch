const gridSize = 16;

const grid = document.querySelector(".grid-container");

for (i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.className = "gridRow-container";
    gridRow.style.display = "flex";
    grid.appendChild(gridRow);

    for (j = 0; j < gridSize; j++) {
        const gridBlock = document.createElement("div");
        gridBlock.className = "grid-block";
        gridBlock.style.border = "1px solid black";
        gridBlock.style.height = "50px";
        gridBlock.style.width = "50px";
        gridRow.appendChild(gridBlock);
    }

}