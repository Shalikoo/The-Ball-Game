'use strict'

var ballSize = 100

function onBallClick(elBall, maxDiameter) {

    ballSize += getRandomInt(20, 60)

    if(ballSize >= maxDiameter){
        ballSize = 100
    }
    
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = ballSize
}
