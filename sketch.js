const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bg,trainCrossingSound,trainSound;
var engine,world,rock;
var ground, coach1,coach2,coach3,coach4,coach5,coach6,chain1,chain2,chain3,chain4,chain5;

function preload(){
bg=loadImage("images/bg.jpg");
trainCrossingSound = loadSound("sound/train_crossing.mp3");
trainSound = loadSound("sound/train.mp3");
}

function setup(){
createCanvas(1200,600)
engine = Engine.create();
world = engine.world;

ground = new Ground();

coach1 = new Coach(50,100);
coach2 = new Coach(150,100);
coach3 = new Coach(250,100);
coach4 = new Coach(350,100);
coach5 = new Coach(450,100);
coach6 = new Coach(550,100);

chain1 =  new Chain(coach1.body,coach2.body);
chain2 =  new Chain(coach2.body,coach3.body);
chain3 =  new Chain(coach3.body,coach4.body);
chain4 =  new Chain(coach4.body,coach5.body);
chain5 =  new Chain(coach5.body,coach6.body);

rock = new Rock();
}

function draw(){
Engine.update(engine);
background(bg);
ground.display();

rock.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

coach1.display();
coach2.display();
coach3.display();
coach4.display();
coach5.display();
coach6.display();

var collision = Matter.SAT.collides(coach6.body,rock.body);

if(collision.collided){
  trainCrossingSound.play();
  text("Train Crashed",600,300);
 }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(coach6.body,{x:coach6.body.position.x,y:coach6.body.position.y},
      {x:30,y:0});
     // trainSound.play();
  }
}
