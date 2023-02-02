var barco, mar, oceano, navio



function preload(){

  barco=loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
mar=loadImage ("sea.png");

}


function setup(){
  createCanvas(400,400);

oceano= createSprite(400,200);
oceano.addImage(mar)


navio= createSprite(130,260,30,30)
navio.addAnimation("barco", barco);

navio.scale=0.3
}





function draw() {
  background("blue");
    drawSprites();

 
}
