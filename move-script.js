const firstCell = document.getElementById("first-cell")
const dot = document.getElementById("dot")
const botonMover = document.getElementById("boton-mover")

const GRID_SIZE = [4, 4]
let initialPosition = [3, 4]


function moveDot(toPosition){
    const [fila, columna] = toPosition
    
    firstCell.style.gridArea = `${fila} / ${columna}`
    dot.style.gridArea = `${fila} / ${columna}`
}
moveDot(initialPosition)

function moveCell(currentPosition){
    const [fila, columna] = currentPosition
    
    if(fila === 1 && columna === GRID_SIZE[1]) return currentPosition
    
    if(columna === GRID_SIZE[1]){
        return [fila-1, 1]
    }
    
    return [fila, columna+1] 
}

function moveMultipleCells(currentPosition, count){

    for(let i = 0; i < count; i++){
        currentPosition = moveCell(currentPosition)
        moveDot(currentPosition)
    }

    return currentPosition
}

botonMover.addEventListener("click", (e) => {
    initialPosition = moveMultipleCells(initialPosition, 1)
})