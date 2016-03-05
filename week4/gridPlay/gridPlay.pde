Player player;
Map map;

void setup() {

  size(500, 500);
  player = new Player();
  map = new Map();
  myFont = createFont("HannotateSC-W5", 14);
  textFont(myFont);
  map.create();
}

void draw() { 
  background(0); 
  map.update();
  map.draw();
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      //if (map.grid[player.xPos][player.yPos-1] == '#') 
      if (map.isSpace[player.xPos][player.yPos-1] == false) {
      } else {
        player.yPos -=1;
      }
    }
    if (keyCode == DOWN) {
      if (map.isSpace[player.xPos][player.yPos+1] == false) {
      } else {
        player.yPos +=1;
      }
    }
    if (keyCode == LEFT) {
      if (map.isSpace[player.xPos-1][player.yPos] == false) {
      } else {
        player.xPos -=1;
      }
    }
    if (keyCode == RIGHT) {
      if (map.isSpace[player.xPos+1][player.yPos] == false) {
      } else {
        player.xPos +=1;
      }
    }
  }
}