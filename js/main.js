'use strict'

var ballSize = 100

function onBallClick() {
    var elBall = document.querySelector('.ball')

    if(ballSize >= 400){
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        ballSize = 100
        elBall.innerText = ballSize
    } else {
        ballSize += 50
        elBall.style.width = ballSize + 'px'
        elBall.style.height = ballSize + 'px'
        elBall.innerText = ballSize
    }

    

}