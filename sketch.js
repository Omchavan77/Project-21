var car,bullet;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor="blue"
  thickness=random(22,83)
  wall=createSprite(800,200,thickness,height/2)
  wall.shapeColor="pink"
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(car,wall))
  {
    car.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damege<10)
    {
      wall.shapeColor=color(230,230,0);
    }

  }

}
function hasCollided(bullet,Lwall)
{
  bulletRightEdge=Lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}