var ball
function setup() {
  createCanvas(400, 400);
  ball = createSprite(100, 100, 30, 30)

}

function draw() {
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x = ball.position.x+3
  }
if(keyIsDown(LEFT_ARROW)){
  ball.position.x = ball.position.x-3
}
  drawSprites()




}




