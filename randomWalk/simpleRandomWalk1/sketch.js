
var x;
var y;
var step = 0
var walkerWeight = 5
var stepHist = [];

function setup(){
    createCanvas(400, 400);
    frameRate(60)
    background(51);
    
    x = 200;
    y = 200;
}

function draw(){

    stroke(`rgba(${floor(x+y/2)},${x},${y},0.25)`);
    if(x == 0 || x == 400 || y == 0 || y == 400){
        stroke(`red`);
    }

    strokeWeight(walkerWeight);
    point(x, y);

    var r = floor(random(4));

    switch(r){
        case 0:
            StepsHistory('🡢')
            if(x <= 400) x = x + walkerWeight
        break;
        case 1:
            StepsHistory('🡠')
            if(x >= 0) x = x - walkerWeight
        break;
        case 2:
            StepsHistory('🡣')
            if(y <= 400) y = y + walkerWeight
            break;
        case 3:
            StepsHistory('🡡')
            if(y >= 0) y = y - walkerWeight
        break;
    }

    document.getElementById('position').innerText = `X : ${x / walkerWeight} Y: ${y / walkerWeight}`

}

function StepsHistory(stepDir){
    step ++

    if(stepHist.length > 4){
        stepHist.shift()
    }

    stepHist.push(stepDir)

    document.getElementById('steps').innerText = step
    document.getElementById('stepHist').innerText = stepHist

}