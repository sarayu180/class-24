const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var ball = []

var array1 = [1,2,3,4,5]
//console.log (array1)

var array2 = [1,"doll",true]
//console.log(array2)

var array3 = [[1,2],[3,4],[5,6]]
//console.log(array3[0][0])
array3.push(5)
//console.log(array3)
array3.pop()
//console.log(array3)
``
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  //cannonBall.display();

  for(var i = 0;i<ball.length;i ++){
    showCannonBalls(ball[i],i)

  }
}

function showCannonBalls(ball,i){
  if(ball){
    ball.display()
  }

}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    ball.push(cannonBall)
    ball[ball.length -1].shoot();

  }
}
