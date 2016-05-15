class Ghost {

  PVector ghostPos;
  int ghostDir;
  int ghostNextDir;
  float ghostSpeed;
  color ghostC;
  
  Ghost(){
    ghostPos = new PVector(1.5, 1.5);
    ghostDir = UP;
    ghostSpeed = 0.08;
    ghostC = color(200, 200, 0);
  }
}