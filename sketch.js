
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball_options;
var ground, ground_options
var leftSide, rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(100,350,30,ball_options)
	World.add(world, ball)
	Engine.run(engine);
	ground = new Ground(width/2,670,width,20)
	leftSide = new Ground(800,600,20,120)
	rightSide = new Ground(1000,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,30)
  ground.display()
  leftSide.display();
  rightSide.display();
  drawSprites();

}

function keyPressed() {
	if(keyCode === 38){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75})
	}
}

