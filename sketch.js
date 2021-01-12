var canvas;
var music;
var b1,b2,b3,b4;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
b1=createSprite(0,580,360,30);
b1.shapeColor="blue"
b2=createSprite(295,580,200,30);
b2.shapeColor="orange"
b3=createSprite(515,580,200,30);
b3.shapeColor="pink"
b4=createSprite(740,580,220,30);
b4.shapeColor="green"
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="yellow"
ball.velocityX=4;
ball.velocityY=3;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(b1.isTouching(ball)&&ball.bounceOff(b1)){
ball.shapeColor="blue"
music.play();
    }
    if(b2.isTouching(ball)){
ball.shapeColor="orange"
ball.velocityX=0;
ball.velocityY=0;
music.stop();
    }
    if(b3.isTouching(ball)&&ball.bounceOff(b3)){
        ball.shapeColor="pink"
    }
    if(b4.isTouching(ball)&&ball.bounceOff(b4)){
        ball.shapeColor="green"
    }
    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
