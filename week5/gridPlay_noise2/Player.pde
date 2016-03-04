// the player
PFont myFont;
class Player {
  int xPos;
  int yPos;
  char txt = '我';

  int cellsize = 10;

  Player() {
    xPos = floor(random(width/cellsize));
    yPos = floor(random(height/cellsize/2));
    while (!world.isPlains[xPos][yPos]) {
      xPos = floor(random(width/cellsize));
      yPos = floor(random(height/cellsize/2));
      //println("resetting");
    }
  }
}