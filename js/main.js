'use strict'

var ballSize = 100

function onBallClick() {
    console.log(`Ball is clicked!`)
    var elBall = document.querySelector('.ball')

    ballSize += 50
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    console.log(elBall.style.height)
}