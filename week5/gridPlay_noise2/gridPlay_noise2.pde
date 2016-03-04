Player player;
Map world;

void setup() {
  size(500, 500);
  world = new Map();
  world.create();
  player = new Player();
  myFont = createFont("HannotateSC-W5", 14);
  textFont(myFont);
}

void draw() { 
  background(0); 
  world.update();
  world.draw();
  //player.draw();
}


void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      //if (map.grid[player.xPos][player.yPos-1] == '#') 
      if (world.isPlains[player.xPos][player.yPos-1] == true) {
        player.yPos -=1;
      }
    }
    if (keyCode == DOWN) {
      if (world.isPlains[player.xPos][player.yPos+1] == true) {
        player.yPos +=1;
      }
    }
    if (keyCode == LEFT) {
      if (world.isPlains[player.xPos-1][player.yPos] == true) {
        player.xPos -=1;
      }
    }
    if (keyCode == RIGHT) {
      if (world.isPlains[player.xPos+1][player.yPos] == true) {
        player.xPos +=1;
      }
    }
  }
}