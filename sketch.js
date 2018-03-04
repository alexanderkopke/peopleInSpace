
var x = 0;

var spaceData;

function setup(){
    createCanvas(600, 600);
    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
    
}

function gotData(data){
    console.log(data);
    spaceData = data;   
}

function draw(){
    background(0);
    randomSeed(4);
    if(spaceData){
        for (var i = 0; i < spaceData.number; i++){
            fill(255);
            var rx = random(width);
            var ry = random(height);
            ellipse(rx, ry, 25, 25);
            text(spaceData.people[i].name + " is located at " + spaceData.people[i].craft, rx + 20, ry);
        }

    }
        

    stroke(255);
    line(x, 0, x, height);
    x = x + 1;
    if( x > width){
        x = 0;
    }
}