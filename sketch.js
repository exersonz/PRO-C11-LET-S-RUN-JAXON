
var jaxon, jaxon_running;
var path, pathImage;
var border_L, border_R;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,600);

  //create path sprite
  path = createSprite(200,200, 350,10);
  path.addImage("ground", pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  //create runner sprite
  jaxon = createSprite(200,400,100,100);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.07;
  
  //create a invisible border(left)
  border_L = createSprite(0,350,10,800);
  border_L.visible = false;

  //create another invisible border(right)
  border_R = createSprite(400,350,10,800);
  border_R.visible = false;
}

function draw() {
  background(0);

  jaxon.x = mouseX;

  //limit to how far jaxon can go
  if(mouseX > 400){
    jaxon.x = 400;
  }
  
  if(mouseX < 10){
    jaxon.x = 10;
  }

  //reset the background
  if(path.y > 400){
    path.y = height/6;
  }

  jaxon.collide(border_L);
  jaxon.collide(border_R);

  drawSprites();
}