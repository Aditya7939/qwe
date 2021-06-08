var cat,mouse,mouse1Img,mouse2Img,cat1Img,cat2Img,cat3Img,mouse3Img,bgImg;
function preload() {
    //load the images here
    cat1Img = loadImage("cat1.png");
    cat2Img = loadAnimation("cat2.png","cat3.png");
    cat3Img = loadImage("cat4.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadAnimation("mouse2.png","mouse3.png");
    mouse3Img = loadImage("mouse4.png")
    bgImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(800,700,120,120);
     cat.addImage("act",cat1Img);
     cat.scale = 0.2;
     cat.debug=true;
     mouse = createSprite(100,700,120,120);
     mouse.addImage("mouse1",mouse3Img);
     mouse.scale = 0.2;
     mouse.debug=true;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

     if (cat.width -mouse.width/8 > (cat.x - mouse.x)*2){
         cat.addAnimation("cat ru",cat3Img);
         cat.changeAnimation("cat ru");
         cat.velocityX=0;
         mouse.addAnimation("mo",mouse1Img);
         mouse.changeAnimation("mo");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyCode === LEFT_ARROW){
       mouse.addAnimation("mouse",mouse2Img);
       mouse.changeAnimation("mouse");
       mouse.frameDelay=25;
       cat.addAnimation("cat",cat2Img);
       cat.changeAnimation("cat")
       cat.velocityX=-3;
   }

   if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouse",mouse2Img);
    mouse.changeAnimation("mouse");
    mouse.frameDelay=25;
}

}
