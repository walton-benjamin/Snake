import { onSnake, expandSnake, getExpansionRate } from "./snake.js"
import { randomGridPosition } from "./grid.js"


let food = getRandomFoodPosition()


export function update(){
    if(onSnake(food)){
        expandSnake(getExpansionRate())
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

