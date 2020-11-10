const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,paper,ground,world;

function preload()
{
		
}

function setup() {
	createCanvas(1250, 650);
	rectMODE(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new DustBin(1200, 510, 20, 200);
	dustbin2 = new DustBin(1000, 510, 20, 200);
	dustbin3 = new DustBin(1100, 510, 20, 200);


	paper = new Paper(200, 450, 70);
	ground = Bodies.rectangle(width / 2, 620, width, 20);
	

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(230);
   
	
	paper.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  }


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.appllyForce(paperObject.body,paperObject.body.position,{x:85,y:82})
	}
}












 

