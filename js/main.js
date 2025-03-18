'use strict'

function onInit() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.sec-ball')
    var resetSize = 100
    ball1.style.backgroundColor = 'red'
    ball2.style.backgroundColor = 'blue'

    ball1.style.width = 100 + 'px'
    ball1.style.height = 100 + 'px'
    ball1.innerText = '100'

    ball2.style.width = 100 + 'px'
    ball2.style.height = 100 + 'px'
    ball2.innerText = '100'

    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

    ball1.dataset.size = resetSize
    ball2.dataset.size = resetSize
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
}

function changeBgColor() {
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

