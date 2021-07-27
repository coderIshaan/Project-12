var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leafImg, leaf;
var chance, score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.05;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  chance = Math.round(random(1,2));

  if(frameCount%80 === 0){
    if(chance == 1){
      create_apple();
    }
    else {
      create_leaf();
    }
  }

  drawSprites();
}

function create_apple(){
  apple = createSprite(random(50, 350), 30, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY =  15;
}
function create_leaf(){
  leaf = createSprite(random(50, 350), 30, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.075;
  leaf.velocityY =  10;
}