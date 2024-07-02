const GEN = document.querySelector('#genBoard');
const MAX_PIX = 100;
const MIN_PIX = 16;
const SIZE = 560;

function makeBoard(n){
    const container = document.querySelector(".container")
    while(container.firstChild){ // empty the board before making the new one
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        if (i === n - 1){
            row.classList.add("bottom-edge");
        } else if (i === 0){
            row.classList.add("top-edge");
        }
        for (let j = 0; j < n; j++){
            const cell = document.createElement("div");
            cell.style.width = SIZE/n + "px";
            cell.style.height = SIZE/n + "px";
            cell.addEventListener('mouseover', (e) => {e.target.classList.add("square-hover")});
            if (j === n - 1){
                cell.classList.add("right-edge");
            } else if (j === 0){
                cell.classList.add("left-edge");
            }
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeBoard(MIN_PIX)

function newBoardFromInput(){
    n = getInput();
    makeBoard(n);
}

function getInput(){
    let input = prompt('Please choose a value between 16-100 to generate a new board. ' + 
                         'A higher value will result in a more detailed board. ' + 
                         'A lower value will result in a more pixelated board.');
    while (true){
        if (isNumeric(input) && MIN_PIX <= input && input <= MAX_PIX){
            return parseInt(input);
        } else {
            input = prompt("You didn't input a number or the number is too large or too small. " + 
                          'Please choose a value between 16-100 to generate a new board.');
        }
    }
}

function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && 
           !isNaN(parseFloat(str));
  }

GEN.addEventListener('click', newBoardFromInput);



