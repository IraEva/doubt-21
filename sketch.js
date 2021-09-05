
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 

var leftSide;
var rightSide; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

 leftSide= new Ground(20,200,20,40);
 rightSide= new Ground(390,200,20,400);

	var ball_options= {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
      
	//Create the Bodies Here.
    ball=Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  leftSide.show()
  rightSide.show()

  //apply force
  function hForce(){
	Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
  }
  
  function vForce(){
	Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05})
  }
  
  //make the ball move
  function KeyPressed (){
 if(keyCode == UP_ARROW){
	 //apply force to ball
	 ball.mouseClicked(hForce);
	 ball.mouseClicked(vForce);
 }
  }
   drawSprites();
 
}



