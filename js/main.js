'use strict'

var hoverTime
var intervalId
var onMouseEnterBall6
var onMouseLeaveBall6

var gCycles = 0
var gMoves = 0

var gCurrIdx = -1
var gStates = [
    {
        ball1: {size: 100, color: 'red'},
        ball2: {size: 100, color: 'blue'},
        backgroundColor: 'black'
    }
]



function onInit() {
    clearInterval(intervalId)
    clearTimeout(hoverTime)
    gCycles = 0

    gMoves = 0
    var elMove = document.querySelector('.moves-title')
    elMove.innerText = `Moves: ${gMoves}`

    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.sec-ball')
    var ball6 = document.querySelector('.sixth-ball')

    var resetSize = 100
    ball1.style.backgroundColor = 'red'
    ball2.style.backgroundColor = 'blue'

    ball1.style.width = resetSize + 'px'
    ball1.style.height = resetSize + 'px'
    ball1.innerText = resetSize

    ball2.style.width = resetSize + 'px'
    ball2.style.height = resetSize + 'px'
    ball2.innerText = resetSize

    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

    ball1.dataset.size = resetSize
    ball2.dataset.size = resetSize

    ball6.removeEventListener('mouseenter', onMouseEnterBall6)
    ball6.removeEventListener('mouseleave', onMouseLeaveBall6)

    onMouseEnterBall6 = () => {
        hoverTime = setTimeout(() => {
            intervalId = setInterval(() => {
                onBallClick(ball1, 400)
                onBallClick(ball2, 300)
                swapBalls()
                reduceBalls()
                changeBgColor()

                gCycles++
                if (gCycles === 10) {
                    clearInterval(intervalId)
                    gCycles = 0
                }
            }, 2000)
        }, 2000)
    }

    onMouseLeaveBall6 = () => {
        clearTimeout(hoverTime)
        clearInterval(intervalId)
        gCycles = 0
    }

    ball6.addEventListener('mouseenter', onMouseEnterBall6)
    ball6.addEventListener('mouseleave', onMouseLeaveBall6)

    gStates = []
    gCurrIdx = -1
    saveState()
    updateButtons()
}



function onBallClick(elBall, maxDiameter) {
    var ballSize = parseInt(elBall.dataset.size) || 100

    ballSize += getRandomInt(20, 60)

    if(ballSize >= maxDiameter){
        ballSize = 100
    }

    elBall.style.backgroundColor = getRandomColor()
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize

    elBall.dataset.size = ballSize

    saveState()
    updateMovesCounter()
}


function swapBalls() {
    const ball1 = document.querySelector('.ball')
    const ball2 = document.querySelector('.sec-ball')

    const ball1Color = ball1.style.backgroundColor
    const ball2Color = ball2.style.backgroundColor

    const ball1Size = ball1.dataset.size || 100
    const ball2Size = ball2.dataset.size || 100

    ball1.style.backgroundColor = ball2Color
    ball2.style.backgroundColor = ball1Color

    ball1.style.width = ball2Size + 'px'
    ball1.style.height = ball2Size + 'px'
    ball1.innerText = ball2Size
    ball1.dataset.size = ball2Size

    ball2.style.width = ball1Size + 'px'
    ball2.style.height = ball1Size + 'px'
    ball2.innerText = ball1Size
    ball2.dataset.size = ball1Size

    saveState()
    updateMovesCounter()
}


function reduceBalls() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.sec-ball')
    var ball1Size = ball1.dataset.size || 100
    var ball2Size = ball2.dataset.size || 100
    var minDiameter = 100

    ball1Size -= getRandomInt(20, 60)
    ball2Size -= getRandomInt(20, 60)

    if(ball1Size <= minDiameter){
        ball1Size = minDiameter
    }

    if(ball2Size <= minDiameter){
        ball2Size = minDiameter
    }

    ball1.style.width = ball1Size + 'px'
    ball1.style.height = ball1Size + 'px'
    ball1.innerText = ball1Size

    ball2.style.width = ball2Size + 'px'
    ball2.style.height = ball2Size + 'px'
    ball2.innerText = ball2Size

    ball1.dataset.size = ball1Size
    ball2.dataset.size = ball2Size

    saveState()
    updateMovesCounter()
}

function changeBgColor() {
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()

    saveState()
    updateMovesCounter()
}

function undo() {
    if (gCurrIdx <= 0) return
    gCurrIdx--
    loadState(gStates[gCurrIdx])
}

function redo() {
    if (gCurrIdx >= gStates.length - 1) return
    gCurrIdx++
    loadState(gStates[gCurrIdx])
}

function loadState(state) {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.sec-ball')
    
    ball1.style.width = state.ball1.size + 'px'
    ball1.style.height = state.ball1.size + 'px'
    ball1.style.backgroundColor = state.ball1.color
    ball1.innerText = state.ball1.size
    ball1.dataset.size = state.ball1.size

    ball2.style.width = state.ball2.size + 'px'
    ball2.style.height = state.ball2.size + 'px'
    ball2.style.backgroundColor = state.ball2.color
    ball2.innerText = state.ball2.size
    ball2.dataset.size = state.ball2.size

    document.body.style.backgroundColor = state.backgroundColor
    
    updateButtons()
}



function saveState() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.sec-ball')
    var bodyColor = document.body.style.backgroundColor

    var state = {
        ball1: {
            size: ball1.dataset.size,
            color: ball1.style.backgroundColor
        },
        ball2: {
            size: ball2.dataset.size,
            color: ball2.style.backgroundColor
        },
        backgroundColor: bodyColor
    }

    gStates = gStates.slice(0, gCurrIdx + 1)
    gStates.push(state)
    gCurrIdx++
    
    updateButtons()
}

function updateButtons() {
    document.querySelector('.undo-btn').disabled = (gCurrIdx <= 0)
    document.querySelector('.redo-btn').disabled = (gCurrIdx >= gStates.length - 1)
}

function updateMovesCounter() {
    var elMove = document.querySelector('.moves-title')
    gMoves++
    elMove.innerText = `Moves: ${gMoves}`
}