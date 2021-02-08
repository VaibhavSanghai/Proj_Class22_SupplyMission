//Calling the names of all the variables
var helicopterImg, helicopterSprite, packageSprite, packageImg;
var packageBody, ground;

//Making all the Matter constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload () {
	//Loading images of the helicopter and the package
	helicopterImg = loadImage("helicopter.png");
	packageImg = loadImage("package.png");
}

function setup () {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Giving the properties to the package that is going to fall down
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale = 0.2;

	//Give properties to the helicopter
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 0.6;

	//Making the ground
	groundSprite=createSprite(width/2, height - 35, width,10);
	groundSprite.shapeColor = color(255);

	//Adding the engine and the world to the display screen
	engine = Engine.create();
	world = engine.world;

	//Making a package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Running the engine
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  //Setting the x and y coordinates of the package srpite
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 
  //Drawing the sprites
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //Make the package body fall only on press of the Down arrow key.
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;    
  }
}