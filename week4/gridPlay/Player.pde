// the player
PFont myFont;
class Player {
  int xPos;
  int yPos;
  String txt = "我";
  
  //t move = 0;
  //int speed = 1;
  //int maxMove =200;

  Player() {
    xPos = width/2-3;
    yPos = height/2+1;
  }    
  void draw() {
    
    fill(255, 255, 0);
    text(txt, xPos, yPos);
  }
}