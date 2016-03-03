// the player
PFont myFont;
class Player {
  int xPos;
  int yPos;
  char txt = '我';
  
  int cellsize = 10;

  Player() {
    xPos = width/cellsize/2;
    yPos = height/cellsize/2;
  }    
  //void draw() {
  //}
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      //if (map.grid[player.xPos][player.yPos-1] == '#') 
      if (map.isPlains[player.xPos][player.yPos-1] == false) {
      } else {
        player.yPos -=1;
      }
    }
    if (keyCode == DOWN) {
      if (map.isPlains[player.xPos][player.yPos+1] == false) {
      } else {
        player.yPos +=1;
      }
    }
    if (keyCode == LEFT) {
      if (map.isPlains[player.xPos-1][player.yPos] == false) {
      } else {
        player.xPos -=1;
      }
    }
    if (keyCode == RIGHT) {
      if (map.isPlains[player.xPos+1][player.yPos] == false) {
      } else {
        player.xPos +=1;
      }
    }
  }
}