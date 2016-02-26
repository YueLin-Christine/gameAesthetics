Player player;
Map map;

float ePosX = random(0, 500);
float ePosY = random(0, 500);

void setup() {
  background(0); 
  size(500, 500);
  player = new Player();
  map = new Map();
  myFont = createFont("HannotateSC-W5", 14);
  textFont(myFont);
  
  //ePosX = round(ePosX/10) *10;
  //ePosY = round(ePosY/10) *10;
  
}

void draw() { 
  //player.keyPressed();
  map.update();
  map.draw();
  player.draw();
  if (player.xPos == map.i && player.yPos == map.j) {
    map.txt = "";
  }
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      player.yPos -=14;
    }
  }
  if (key == CODED) {
    if (keyCode == DOWN) {
      player.yPos +=14;
    }
  }
  if (key == CODED) {
    if (keyCode == LEFT) {
      player.xPos -=14;
    }
  }
  if (key == CODED) {
    if (keyCode == RIGHT) {
      player.xPos +=14;
    }
  }
}