'use strict'

var ballSize = 100

function onBallClick() {
    var elBall = document.querySelector('.ball')
    
    ballSize += getRandomInt(20, 60)

    if(ballSize >= 400){
        ballSize = 100
    } 
    
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = getRandomColor()

}