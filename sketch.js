
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(1000,650,200,20);
	dustbin2 = new Dustbin(1100,610,20,100);
	dustbin3 = new Dustbin(900,610,20,100);
	paper1= new Paper(50,450,40);
	ground= new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
if(keyCode===UP_ARROW) {
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}
}


