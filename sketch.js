const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var ground, tower;
var canon;
var ballGroup = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options_ground = {
    isStatic: true 
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options_ground);
  World.add(world, ground);

  // CRIANDO O OBJETO
  tower = new Tower();
  canon = new Cannon(180,110,130,100,25);
  
  angleMode(DEGREES);
}

function draw() {
  // imagem, posX, posY, width, height
  image(backgroundImg, 0,0,width, height);
  Engine.update(engine);
  tower.display();
  canon.display();
  for(var i = 0; i < ballGroup.length; i++){
    showBalls(ballGroup[i]);
  }
  // ball.display();
  rect(ground.position.x, ground.position.y, width * 2, 1);
}

function showBalls(ball) {
  if(ball) {
    ball.display();
  }
}

// executar um evento 
function keyReleased() {
  if(keyCode === 32) {
    ballGroup[ballGroup.length - 1].shoot();
  }
}

function keyPressed() {
  if(keyCode === 32) {
    var ball = new CannonBall(180,110);
    ballGroup.push(ball);
  }
}