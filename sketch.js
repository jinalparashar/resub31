var database;
var position;

function setup(){
  createCanvas(800,800);
  database = firebase.database();  //method
  console.log(database);

  ball = createSprite(100,100, 30, 30);
  ball.shapeColor = "red";

  var ballPosition =  database.ref("ball/position");
  ballPosition.on("value", readPosition, showError )

  // 200, 200  --> ss
  // 204, 204  --> ss
  // 209, 240, --> ss   --> keeps and ear and hears continously
  // it will take a snapshot for every change.

}

function draw(){
  background(0);

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
  }

  drawSprites();

}

function readPosition(data){
  position = data.val();
  // position --> x and y
  ball.x =  position.x;
  ball.y = position.y; 
}

function showError(){
  console.log("Error")
}


function writePosition(x, y){
  var write = database.ref("ball/position");
  write.set({
    x :  position.x + x,
    y :   position.y + y
  })
}