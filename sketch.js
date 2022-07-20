var box
function setup() {
  createCanvas(600,400);
  //fill("purple")
  box=createSprite(300,200,20,20)
}

function draw() 
{
  background("pink");
  if(keyDown(RIGHT_ARROW)){
    box.position.x = box.postion.x +5

  }
  drawSprites()

}




