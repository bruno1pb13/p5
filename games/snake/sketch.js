
var x, y;
var step = 0
var walkerWeight = 10
var direction = null

var fruitX = 150
var fruitY = 150

var state = 'play'

var score = 0
var highScore = 0

var user = {
    position: [],
    size: 1, 
}


function setup(){
    frameRate(10)
    
    //canvas size
    var width = 1300;
    var height = 500;
    createCanvas(width, height);
    
    user.position.push({
        x : round(width / 2), 
        y : round(height / 2)
    })

    updateState('play')

}

function draw(){
    background(51);
    stroke(`red`);
    strokeWeight(walkerWeight);
    
    if(user.position.length > user.size){
        user.position.shift()
    }

    var lastPosition = user.position[user.position.length - 1]


    // colisions
    if(lastPosition.x == 0 || lastPosition.x == width || lastPosition.y == 0 || lastPosition.y == height){
        gameOver()
    }

    // selfColision
    for(var i = 0; i < user.position.length - 1; i++){
        if(user.position[i].x == lastPosition.x && user.position[i].y == lastPosition.y){
            gameOver()
        }
    }

    switch(direction){
        case 'left':
            user.position.push({x : lastPosition.x - walkerWeight, y : lastPosition.y})
        break;
        case 'right':
            user.position.push({x : lastPosition.x + walkerWeight, y : lastPosition.y})
        break;
        case 'top':
            user.position.push({x : lastPosition.x, y : lastPosition.y - walkerWeight})
        break;
        case 'bottom':
            user.position.push({x : lastPosition.x, y : lastPosition.y + walkerWeight})
        break;
    }

    for(var i = 0; i < user.position.length; i++){
        point(user.position[i].x, user.position[i].y);
    }

    fruit('add')
}

function fruit(){
        stroke(`green`);
        strokeWeight(walkerWeight);
    
        if(user.position[user.position.length - 1].x == fruitX && user.position[user.position.length - 1].y == fruitY){
            fruitX = floor(random(width / walkerWeight)) * walkerWeight
            fruitY = floor(random(height / walkerWeight)) * walkerWeight

            // don't spawn fruit on canvas corner
            if(fruitX == 0){
                fruitX = fruitX + walkerWeight
            }
            if(fruitY == 0){
                fruitY = fruitY + walkerWeight
            }
            if(fruitX == width){
                fruitX = fruitX - walkerWeight
            }
            if(fruitY == height){
                fruitY = fruitY - walkerWeight
            }

            user.size++
            score++
            updateScore(score)
        }
    
        point(fruitX, fruitY);
}

function gameOver(){
    background(51);
    
    if(score > highScore){
        highScore = score
        document.getElementById('highScore').innerText = highScore
    }

    score = 0
    direction = null
    user = {
        position: [{
            x : round(width / 2),
            y : round(height / 2)
        }],
        size: 1,
    }

    point(user.position[user.position.length - 1].x, user.position[user.position.length - 1].y);
    updateState('gameOver')

}

