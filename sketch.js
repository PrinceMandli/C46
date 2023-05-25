var ground;
var trackImage;
var car,carImage;

var obstacles,obstaclesGroup,speedBumpImage;

function preload(){
  trackImage=loadImage("track2.png");
  carImage=loadImage("sf90car.png");
  speedBumpImage=loadImage("speedBump.png")


}

function setup(){
  createCanvas(windowWidth,windowHeight);ground = createSprite(200,180,400,20);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("track2",trackImage);
  ground.x = ground.width /2;
  ground.scale=3;
  ground.velocityY=2;

  car=createSprite(width/2,height/2,40,40);
  car.addImage("sf90car",carImage);

  obstacleGroup=new Group();


}

function draw(){
  background("blue");

  if (ground.y>400)
    ground.y= height/2

  handlePlayerControls();
  spawnObstacles();
    
  drawSprites();

}
function handlePlayerControls(){
  if(keyDown(LEFT_ARROW)){
    car.position.x-=5
  }
  
  if(keyDown(RIGHT_ARROW)){
    car.position.x+=5

}
}
function spawnObstacles(){
  if (frameCount % 600 == 0) {
      var obstacle;
      obstacle=createSprite(width/3,100,50,40)
      obstacle.addImage("speedBump",speedBumpImage);
      obstacle.scale=0.2;
      obstacle.velocityY=2;
      obstacleGroup.add(obstacle);
      car.depth=obstacle.depth+1;

  }
}