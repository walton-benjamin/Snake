const GRID_SIZE = 15
//also need to edit grid size in style.css

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