var fixedRect, movingRect;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  var obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";
  var obj2 = createSprite(800,100,50,50);
  obj2.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
  obj1.velocityX = 3;
  obj2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
//bounceOff(movingRect,fixedRect);
 bounceOff(obj1,obj2);
  drawSprites();
}
function bounceOff(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < fixedRect.height/2 + object1.height/2){
  object1.velocityY = movingRect.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}