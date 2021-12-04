var spacejet, spacejetImage;
var ufo, ufoImage;
var background1, backgroundImage;
var bullet, bulletImage;
var ufoGroup;
var devsSongMaamKaNahil;
var backgroundMusic;

var score = 0;

function preload (){
  spacejetImage = loadImage("Photos/Game Spacejet 2.png");
  ufoImage = loadImage("Photos/Game Alien.png");
  backgroundImage = loadImage("Photos/Space Background.jpg");
  bulletImage = loadImage("Photos/Game Bullet.png");  
  devsSongMaamKaNahi = loadSound ("Photos/My Song.m4a");
  backgroundMusic = loadSound ("Photos/My Song 2.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(width/2,height/2);
  background1.addImage(backgroundImage);
  background1.scale = 1.2;
  background1.velocityY = -2;
  spacejet = createSprite(width/2,height-120);
  spacejet.addImage (spacejetImage);
  spacejet.scale = 0.4;
  ufoGroup=new Group();
  bulletGroup=new Group();
  backgroundMusic.loop();
}

function draw() {

  background("white");
  if(background1.y < width/5){
   background1.y = width/4;
  }
  console.log(background1.y);
  if(keyDown("space")){
    var bullet = createSprite(spacejet.x,spacejet.y-150);
    bullet.addImage(bulletImage);
    bullet.scale = 0.2;
    bullet.velocityY = -25;
    bulletGroup.add(bullet);

  }
  spacejet.x=mouseX;
  bulletGroup.overlap(ufoGroup, bulletHit);
  spawnChomu();
  drawSprites();
  textSize(30);
  fill ("White");
  text("Score: "+score,width-150,50);


  
}

function spawnChomu(){
  if(frameCount%40===0){
  var x = Math.round(random(100,width-100));
  ufo = createSprite(x,height-650);
  ufo.addImage(ufoImage);
  ufo.scale = 0.4;
  ufoGroup.add(ufo);
  ufo.lifetime = 400;
}
}

function bulletHit(bullet,ufo){
  bulletGroup.destroyEach();
  ufo.destroy();
  devsSongMaamKaNahi.play();
  score = score+1;
  
}





