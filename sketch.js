const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ball,ball_options;
var ground, ground_options;
function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  ball_options={
    restitution: 0.8
  }
  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world,ball);

  ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground)
  

}

function draw() {
  Engine.update(engine);
  background(0);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
}