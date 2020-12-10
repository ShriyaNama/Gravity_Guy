const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var backgroundImg, backgroundMusic, playerRunning;

function preload(){
  backgroundImg = loadImage("sunset.png"); 
  backgroundMusic = loadSound("backgroundmusic.wav");
  playerRunning = loadAnimation("player1.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png", "player7.png");

}

function setup(){
  createCanvas(8000, displayHeight); 

  engine = Engine.create();
  world = engine.world;
  
  player = createSprite(50, 620);
  player.addAnimation("running", playerRunning);
  player.scale = 0.6;

  platform1b = new Platform(100, 700, 200, 300);
  platform2b = new Platform(240, 700, 200, 300);
  platform3b = new Platform(380, 700, 200, 300);
  platform4b = new Platform(520, 700, 200, 300);
  platform5b = new Platform(660, 700, 200, 300);
  platform6b = new Platform(800, 700, 200, 300);
  platform7b = new Platform(940, 700, 200, 300);

  platform1t = new Platform(100, 500, 200, 300);
  platform2t = new Platform(240, 500, 200, 300);
  platform3t = new Platform(380, 500, 200, 300);
  platform4t = new Platform(520, 500, 200, 300);
  platform5t = new Platform(655, 432, 200, 300);
  platform6t = new Platform(790, 365, 200, 300);
  platform7t = new Platform(925, 298, 200, 300);
  platform8t = new Platform(1060, 231, 200, 300);
  platform9t = new Platform(1200, 231, 200, 300);
  platform10t = new Platform(1340, 231, 200, 300);

  platform8b = new PlatformR(1340, 700, 300, 300);
  platform9b = new PlatformR(1580, 700, 300, 300);
  platform10b = new PlatformR(1820, 700, 300, 300);

  platform11t = new PlatformR(1860, 231, 300, 300);
  platform12t = new PlatformR(2100, 231, 300, 300);
  platform13t = new PlatformR(2340, 231, 300, 300);
  
  platform14b = new Platform(2480, 700, 200, 300);
  platform15b = new Platform(2620, 700, 200, 300);  
  platform16b = new Platform(2760, 700, 200, 300);
  platform17b = new Platform(2900, 700, 200, 300);
  platform18b = new Platform(3040, 700, 200, 300);

  platform14t = new Platform(2580, 231, 200, 300);
}

function draw(){
  background(backgroundImg);
  Engine.update(engine);

  //backgroundMusic.playMode("sustain");
  //backgroundMusic.loop();

  //player.velocityX = 2;

  //camera.position.x = player.x + 2000;
  //camera.position.y = displayHeight/2;

  platform1b.display();
  platform2b.display();
  platform3b.display();
  platform4b.display();
  platform5b.display();
  platform6b.display();
  platform7b.display();

  platform1t.display();
  platform2t.display();
  platform3t.display();
  platform4t.display();
  platform5t.display();
  platform6t.display();
  platform7t.display();
  platform8t.display();
  platform9t.display();
  platform10t.display();

  platform8b.display();
  platform9b.display();
  platform10b.display();

  platform11t.display();
  platform12t.display();
  platform13t.display();

  platform14b.display();
  platform15b.display();
  platform16b.display();
  platform17b.display();
  platform18b.display();

  platform14t.display();

  drawSprites();
}