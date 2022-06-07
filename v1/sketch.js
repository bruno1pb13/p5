function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }
  


  function strok(angle, lineSize, color){
    push();
    strokeCap(ROUND)
    rotate(angle);
    stroke(color);
    line(0,0,lineSize,0)
    pop()
  }

  function draw() {
    background(0);
    translate(windowWidth/2, windowHeight/2);
    rotate(-90)
    
    let hr = hour();
    let mn = minute();
    let sc = second();

    let s = windowHeight
    let ttop = 350

    if(s - windowWidth > 0){
      s = windowWidth + 200
      ttop = 500
      strokeWeight(30);
    }

    stroke('#BD2EE6');
    noFill();
    strokeWeight(15);
    arc(0,0,s -500, s -500,0,360)

    stroke(255);
    let end1= map(hr,0, 12, 0, 360);
    arc(0,0,s -500, s -500,end1 - .4,end1);
    strok(end1, 100, 255);

    stroke('#541466');
    let end2= map(mn,0, 60, 0, 360);
    arc(0,0,s -500, s -500,end2 - .4,end2);
    strok(end2, 150, '#541466');

    stroke('#921BB3');
    let end4= map(sc, 0, 60, 0, 360);
    arc(0,0,s -500, s -500,end4 - 10 ,end4);
  
    noStroke();
    fill(255);
    rotate(90);
    textAlign(CENTER, CENTER);
    textSize(40);
    text(hr + ":" + mn + ":" + sc , 0, ttop);
  }