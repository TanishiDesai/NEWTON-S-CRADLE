
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Bob()
	roof = new Roof()
	rope1 = new Rope(bob1.body , roof.body, -bobDiameter*2,0)
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  bob1.display();
  rope1.display();
  
  drawSprites();
 
}



