let distance = 0
let interval

function  myMove() {
    interval = setInterval(moveRedSquare, 1)
}

function moveRedSquare(){
    const WIDTH_OF_CONTAINER = 400
    const WIDTH_OF_CONTAINER = 50


    if (distance === WIDTH_OF_CONTAINER - WIDTH_OF_CONTAINER ) return clearInterval(interval)
    distance = distance + 1
    const redSquare = document.getElementById("animate")
    redSquare.style.left = distance + "px"
}