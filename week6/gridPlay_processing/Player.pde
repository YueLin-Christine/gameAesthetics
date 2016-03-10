// the player
PFont myFont;
class Player {
  int xPos;
  int yPos;

  int cellsize = 16;

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