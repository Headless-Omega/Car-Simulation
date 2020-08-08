var car, wall;
var speed, weight;
var deformation;
var step1, step2, step3, step4;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(700, 200, 60, height/2);
  car = createSprite(50,200,50,50);

  deformation=0;

  wall.shapeColor="brown";

  step1= speed*speed;
  step2 = step1*weight;
  step3 = step2*0.5;
  step4=step3/22500;

  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if(car.isTouching(wall)){
    deformation= step4;
    car.velocityX=0;
  }

  
  if(deformation<100){
    car.shapeColor="green";
  }
  if(deformation<180&&deformation>100){
    car.shapeColor="yellow";
  }
  if(deformation>180){
    car.shapeColor="red";
  }
  drawSprites();
  
}