//BSP PRINCIPLES
//this sketch draws boxes according to a basic BSP algorithm.
//its not a functional example in terms of our arrays,
//but is meant to get the idea across.

//we create a function that calls itself, and feed in
// a steadily decreasing numSteps variable so it doesn't 
// increment infinitely.

//the cut function selects a direction (horizontal or vertical),
// and draws two rectangles split halfway across the face.
// (ordinarily you would want a bit of randomness.)
// then it calls itself (the cut function) on the two resulting rectangles
// and the process continues until numSteps is 0.

int numSteps = 3;

void setup() {
  size(500, 500);
  background(255);
  cut(0, 0, width, height, numSteps);
  
}

void cut(int x, int y, int w, int h, int step) {
  
  if (step > 0) {
    step--;
    //rect(x, y, w, h);
    int dir = floor(random(2));
    int newPos;

    switch (dir) {

    case 0:
      newPos = w/2;
      //noStroke();
      fill(170,100,100);
      rect(x, y, newPos, h);
      cut(x, y, newPos, h, step);

      fill(255,100,100);
      rect(x+newPos, y, newPos, h);
      cut(x+newPos, y, newPos, h, step);

      break;

    case 1:
      newPos = h/2;
      //noStroke();
      fill(100,100,170);
      rect(x, y, w, newPos);
      cut(x, y, w, newPos, step);
      fill(100,100,255);
      rect(x, y+newPos, w, newPos);
      cut(x, y+newPos, w, newPos, step);
      break;
    default:
      break;
    }
  }
}