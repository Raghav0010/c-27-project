var sleep
var bg
var brush
var gym
var ear
var drink
var move
var astronaut

function preload (){
bg = loadImage("images/iss.png");
sleep = loadAnimation(images/sleep.png);
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png","images/gym22.png");
eat = loadAnimation("add image urls here");
drink = loadAnimation("add image urls here");
move = loadAnimation("add image urls here")
}


astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1

if(keyDown("UP_ARROW")){
  astronaut,addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing")
  astronaut.y = 350
  astronaut.velocityX = 0 
  astronaut.velocityY = 0
   }
   if(keyDown("DOWN_ARROW")){
    astronaut,addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0 
    astronaut.velocityY = 0
     }
     if(keyDown("LEFT_ARROW")){
      astronaut,addAnimation("eating",eat);
      astronaut.changeAnimation("eat")
      astronaut.y = 350
      astronaut.velocityX = 0 
      astronaut.velocityY = 0
       }
       if(keyDown("RIGHT_ARROW")){
        astronaut,addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing")
        astronaut.y = 350
        astronaut.velocityX = 0 
        astronaut.velocityY = 0
         }
         if(keyDown("M_ARROW")){
          astronaut,addAnimation("moving",move);
          astronaut.changeAnimation("move")
          astronaut.y = 350
          astronaut.velocityX = 0 
          astronaut.velocityY = 0
           }
        
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 

 UP Arrow = brushing
 DOWN Arrow  = gymming
 LEFT Arrow = eating 
 RIGHT Arrow  = bathing
 M key = moving
 



}

function draw() {
  background(255,255,255);  
  drawSprites();
}