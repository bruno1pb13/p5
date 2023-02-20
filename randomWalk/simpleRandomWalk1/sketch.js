
var x;
var y;
var step = 0
var walkerWeight = 5
var stepHist = [];



function setup(){

    //Screen size
    var width = 400;
    var height = 400;

    createCanvas(width, height);
    frameRate(60)
    background(51);
    
    x = round(width / 2);
    y = round(height / 2);
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
        //Armazena somente os ultimos 4 movimentos no historico. 
        stepHist.shift()
    }

    stepHist.push(stepDir)

    document.getElementById('steps').innerText = step
    document.getElementById('stepHist').innerText = stepHist

}