/*define global variables*/
//get functions and constants from snake.js file, tidier code
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED,
     getSnakeHead, snakeIntersection, getScore} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid, getGridSize } from './grid.js'

//initializing variables
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

/* start game loop*/
function main(currentTime){
    if (gameOver){
        let score = getScore()
        let outString = ('You lost. Press ok to restart. Your score was ' + score +' points')
        if (confirm(outString)){
            window.location = '/'
        }
    return
    }

    window.requestAnimationFrame(main)

    /*get time since last screen render*/
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000

    //if it's not time for the snake to move yet, do nothing
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    //console.log('Render')

    //will control game logic
    update()

    //will draw the outputs of update
    draw()
}

document.documentElement.style.setProperty('--Grid-Size', getGridSize())

window.requestAnimationFrame(main)

function update(){
    //will control game logic when snake moves
    updateSnake()
    updateFood()
    checkForDeath()
}

function draw(){
    //will draw the outputs of snake movements
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}