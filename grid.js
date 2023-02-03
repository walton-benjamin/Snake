const GRID_SIZE = 25
//also need to edit grid size in style.css


/* render game-board-temp (game-board, GRID-SIZE*/
export function randomGridPosition(){
    return{
        x: Math.floor(Math.random()*GRID_SIZE)+ 1,
        y: Math.floor(Math.random()*GRID_SIZE)+ 1
    }
}

export function outsideGrid(position){
    //see if position passed is outside the grid
    return (
        position.x < 1 || position.y < 1 
        || position.x > GRID_SIZE || position.y > GRID_SIZE
    )
}

export function getGridSize(){
    return GRID_SIZE
}

console.log(GRID_SIZE)
document.documentElement.style.setProperty('--gridsize', GRID_SIZE)
