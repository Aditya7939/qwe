var cat,mouse,mouse1Img,mouse2Img,cat1Img,cat2Img;
function preload() {
    //load the images here
    cat1Img = loadImage("cat1.png");
    cat2Img = loadAnimation("cat2.png","cat3.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite();
     cat.addImage("act",cat1Img);
     cat.scale = 0.5;
     mouse = createSprite();
     mouse.addImage("mouse1",mouse1Img);
     mouse.scale = 0.5;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

     if (cat.x - mouse.x < (cat.width - mouse.width)/2){
         cat.addAnimation("cat ru",cat2Img);
         cat.changeAnimation("cat ru");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyDown("LEFT_ARROW")){
       mouse.addAnimation("mouse",mouse2Img);
       mouse.changeAnimation("mouse");
       mouse.frameDelay=25;
   }

}
