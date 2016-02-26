// the enemy

class enemy {
  String txt = "呵";

  float ePosX;
  float ePosY;

  //t move = 0;
  //int speed = 1;
  //int maxMove =200;

  enemy() {
    ePosX = random(0, 500);
    ePosY = random(0, 500);
  }    
  void draw() {
    fill(255, 255, 0);
    text(txt, ePosX, ePosY);
  }
}