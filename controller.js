//handles user input
let lastSnakeDirection = {x:0, y:0}
let snakeDirection = {x:0, y:0}

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            if (lastSnakeDirection.y !== 0) break
            snakeDirection = {x:0, y:-1}
            break
        case 'ArrowDown':
            if (lastSnakeDirection.y !== 0) break
            snakeDirection = {x:0, y:1}
            break
        case 'ArrowLeft':
            if (lastSnakeDirection.x !== 0) break
            snakeDirection = {x:-1, y:0}
            break
        case 'ArrowRight':
            if (lastSnakeDirection.x !== 0) break
            snakeDirection = {x:1, y:0}
            break
        case 'w':
            if (lastSnakeDirection.y !== 0) break
            snakeDirection = {x:0, y:-1}
            break
        case 's':
            if (lastSnakeDirection.y !== 0) break
            snakeDirection = {x:0, y:1}
            break
        case 'a':
            if (lastSnakeDirection.x !== 0) break
            snakeDirection = {x:-1, y:0}
            break
        case 'd':
            if (lastSnakeDirection.x !== 0) break
            snakeDirection = {x:1, y:0}
            break
    }
})

export function getInputDirection(){
    lastSnakeDirection = snakeDirection
    return snakeDirection
}