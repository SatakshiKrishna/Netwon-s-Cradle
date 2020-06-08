var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(300,300,100);
	ball2 = new Ball(400,300,100);
	ball3 = new Ball(500,300,100);
	ball4 = new Ball(600,300,100);
	ball5 = new Ball(700,300,100);
	
	ground = new Ground(600,120,500,40);

	chain= new Chain(ball1.body,ground.body,-200,0);
	chain2 = new Chain(ball2.body,ground.body,-100,0);
    chain3= new Chain(ball3.body,ground.body,0,0);
	chain4 = new Chain(ball4.body,ground.body,100,0);
	chain5= new Chain(ball5.body,ground.body,200,0);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background('White');

  Engine.update(engine)

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  ground.display();

  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-60});
	}
}


