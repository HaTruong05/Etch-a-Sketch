const ROW = 16;
const COL = 16;

function makeBoard(){
    const container = document.querySelector(".container")
    for (let i = 0; i < ROW; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        if (i === COL - 1){
            row.classList.add("bottom-edge")
        } else if (i === 0){
            row.classList.add("top-edge")
        }
        for (let j = 0; j < COL; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            if (j === COL - 1){
                square.classList.add("right-edge")
            } else if (j === 0){
                square.classList.add("left-edge")
            }
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

makeBoard()