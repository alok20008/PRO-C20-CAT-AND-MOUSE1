var garden,gardenImg;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;



function preload() {
    //load the images here
 gardenImg=loadImage("garden.png");
tomImg1=loadAnimation("cat1.png");
tomImg2=loadAnimation("cat2.png","cat3.png");
tomImg3=loadAnimation("cat4.png");

jerryImg1=loadAnimation("mouse1.png");
jerryImg2=loadAnimation("mouse2.png","mouse3.png");
jerryImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,600);
tom.addAnimation("tomSleeping",tomImg1)
tom.scale=0.2
jerry=createSprite(200,600);
jerry.addAnimation("jerryStanding",jerryImg1)
jerry.scale=0.2

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0
tom.addAnimation("tomLaststage",tomImg3)
tom.x=300
tom.changeAnimation("tomLaststage")

jerry.addAnimation("jerryLaststage",jerryImg3)
//jerry.x=300
jerry.changeAnimation("jerryLaststage")
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){

//For moving and changing animation write code here


    jerry.addAnimation("jerryTeasing",jerryImg2)
jerry.changeAnimation("jerryTeasing")
tom.velocityX=-5
tom.addAnimation("tomRunning",tomImg2)
tom.changeAnimation("tomRunning")
jerry.frameDelay=25

}
  


}
