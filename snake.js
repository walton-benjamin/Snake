import { getInputDirection } from "./controller.js"
//import { getExpansionRate } from "./food.js"
//number of tiles moved per second
export const SNAKE_SPEED = 8
 const EXPANSION_RATE = 7
let newSegments = 0
let score = 0
const snakeBody = [
    {x:10, y:10}
]

export function update(){
    //from the tail of the snake, to the head
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2;i>=0;i--){

        //every item moves forward one place
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment=> {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        if (segment.x == snakeBody[0].x && segment.y == snakeBody[0].y){
            snakeElement.classList.add('snakehead')
        }else {
            snakeElement.classList.add('snake')
        }
        
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
    score += amount
    score += 12
}

function addSegments(){
    for (let i = 0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length -1] })
    }
    newSegments=0
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index)=>{
        if (ignoreHead && index == 0) return false
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return(
        pos1.x == pos2.x && pos1.y == pos2.y
    )
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead:true})
}
export function getScore(){
    return score
}

export function getExpansionRate(){
    return EXPANSION_RATE
}