const ROW = 16;
const COL = 16;

function makeBoard(){
    const container = document.querySelector(".container")
    for (let i = 0; i < ROW; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < COL; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

makeBoard()