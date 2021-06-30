const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1;

var bob2;

var bob3;

var bob4;

var bob5;

var thread;




//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}


    var bob1_options={
		isStatic:false
	}

    var bob2_options={
		isStatic:false
	}
	
	var bob3_options={
		isStatic:false
	}


	var bob4_options={
		isStatic:false
	}


	var bob5_options={
		isStatic:false
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	bob1 = Bodies.circle(320,200,10,bob1_options);
    World.add(world,bob1);
   
    
	bob2 = Bodies.circle(360,200,10,bob2_options);
    World.add(world,bob2);

    
	bob3 = Bodies.circle(400,200,10,bob3_options);
    World.add(world,bob3);

	bob4 = Bodies.circle(440,200,10,bob4_options);
    World.add(world,bob4);

	bob5 = Bodies.circle(480,200,10,bob5_options);
    World.add(world,bob5);




	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here







  //create ellipse shape for multiple bobs here

  ellipse(bob1.position.x,bob1.position.y,40);

  ellipse(bob2.position.x,bob2.position.y,40);

  ellipse(bob3.position.x,bob3.position.y,40);

  ellipse(bob4.position.x,bob4.position.y,40);


  ellipse(bob5.position.x,bob5.position.y,40);

}











//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
