// the map
class Map {
  int x;
  int y;
  int count=0;
  int maxCount=400; 
  char[][] grid;
  boolean[][] isSpace;

  Map() {
    x = 50/2;
    y = 50/2;
    grid = new char[50][50];
    isSpace = new boolean[50][50];
  }

  void create() {
    while (count<maxCount) {
      int r = floor(random(4));
      if (r == 0) {
        if (y > 0) {
          y-=1;
        }
      } else if (r == 1) {
        if (x < 49) {
          x+=1;
        }
      } else if (r == 2) {
        if (y < 49) {
          y+=1;
        }
      } else if (r == 3) {
        if (y > 0) {
          x-=1;
        }
      }
      count++;
      isSpace[x][y] = true;
      grid[x][y] = '+';
    }
  }
  void update() {
    for (int i =0; i<50; i++) {
      for (int j =0; j<50; j++) {
        if (j == player.xPos && i == player.yPos) {
          grid[j][i] = '我';
        } else if (isSpace[j][i] == true) {
          grid[j][i] = '+';
        }
      }
    }
    //grid[player.xPos][player.yPos] = '我';
  }

  void draw() {
    for (int i = 0; i<50; i++) {
      for (int j=0; j<50; j++) {
        if (grid[j][i] == '我') {
          fill(0, 255, 0);
        } else {
          fill(255);
        }
        text(grid[j][i], j*10, i*10);
      }
    }
  }
}