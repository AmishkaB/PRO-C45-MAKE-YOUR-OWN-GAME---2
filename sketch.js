//variable declaration
var ninja, ninjaImg;
var bg, bgImg;

function preload(){
    arrow = loadImage('images/arrow.png')
    platform = loadImage('images/platform.jpg')
    bgImg = loadImage('images/bg.png');
    ninjaImg = loadAnimation('images/n2.png','images/n4.png')
}

function setup (){
    createCanvas(1500,1000);

    //create background
    bg = createSprite(750,500,1500,1000);
    bg.addImage('B',bgImg);

    ninja = createSprite(100,870,20,20)
    ninja.addAnimation('ninja_running',ninjaImg)
   //ninja.frameDelay=
}

function draw(){
    background('black');
    bg.velocityX = -9

    if (bg.x < 0){
      bg.x = bg.width/2;
    }
    drawSprites()
}
