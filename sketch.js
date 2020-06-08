var car, collider,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  car = createSprite(20, 200, 20, 20);
  collider = createSprite(1200, 200, thickness, height/2);
  collider.shapeColor = rgb (80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random (22,83);
  car.shapeColor = rgb(0,0,0);
}
function draw() {
  background(255,255,255);
  car.velocityX = 12;
  if (deformation (speed, weight,thickness)> 10 && isTouching(collider,car)){
    car.shapeColor = rgb(255,0,0);
    car.velocityX = 0;
  }
  if (deformation (speed,weight,thickness)< 10 && isTouching(collider,car)){
    car.shapeColor = rgb(0,255,0);
    car.velocityX = 0;
  }
  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true
  }
  else{return false
  }
}
function deformation(speed,weight,thickness){
  var deformation = 0.5*speed*weight*speed/thickness*thickness*thickness;
  return deformation;
}