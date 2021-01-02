const Engine = Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world ;

var box1,box2,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world ;
  //creating object for box class
  box1= new Box(200,200,50,100);
  box2 = new Box(170,100,100,50);
  ground = new Ground(400,380);
 /* ball_options = 
  {
restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);*/
}

function draw() {
  background(0);
  
  
Engine.update(engine);

/* ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 20, 20);*/

 box1.display();
 box2.display();
 ground.display();
}