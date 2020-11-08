const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground, ball;

function setup() {
  createCanvas(400,400);
engine= Engine.create();
world=engine.world;

var g_options={
  isStatic:true
}

ground= Bodies.rectangle(200,height,400,20,g_options);
World.add(world,ground);

var b_options={
  restitution:1
}
ball=Bodies.circle(100,150,40,b_options);
World.add(world,ball);

var s_options={
  isStatic:true
}
sun=Bodies.circle(300,100,60,s_options);
World.add(world,sun);
 
}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
  fill("green") ;
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

fill("red");
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,40,40);

fill("yellow");
stroke("yellow");

ellipseMode(CENTER);
ellipse(sun.position.x,sun.position.y,60,60);
}