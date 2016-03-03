// the map
class Map {
  String[][] map;
  int cellsize = 10;
  int x, y;

  boolean[][] isOcean;
  boolean[][] isPlains;
  boolean[][] isHills;
  boolean[][] isMountains;

  Map() { 
    map = new String[width/cellsize][height/cellsize];
    //noiseSeed(0);
    noiseDetail(4, 0.7);
    
    isOcean = new boolean[width/cellsize][height/cellsize];
    isPlains = new boolean[width/cellsize][height/cellsize];
    isHills = new boolean[width/cellsize][height/cellsize];
    isMountains = new boolean[width/cellsize][height/cellsize];
  }

  void create() {
    float increment = 0.06;
    float xoff=0.0;
    for (int x = 0; x < width/cellsize; x++) {
      xoff += increment;
      float yoff = 0.0;
      for (int y = 0; y < height/cellsize; y++) {
        yoff += increment;
        float noiseVal = noise(xoff, yoff);
        if (noiseVal <0.4) {
          map[x][y] = "o";
          isOcean[x][y] = true;
        } else if (noiseVal>=0.4 && noiseVal < 0.65) {
          map[x][y] = "p";
          isPlains[x][y] = true;
        } else if (noiseVal>=0.65 && noiseVal < 0.85) {
          map[x][y] = "h";
          isHills[x][y] = true;
        } else if (noiseVal>=0.85) {
          map[x][y] = "m";
          isMountains[x][y] = true;
        }
      }
    }
  }
  void update() {
    for (int i =0; i < width/cellsize; i++) {
      for (int j =0; j < width/cellsize; j++) {
        if (j == player.xPos && i == player.yPos) {
          map[j][i] = "我";
        } else if (isOcean[j][i] == true) {
          map[j][i] = "~";
        } else if (isPlains[j][i] == true) {
          map[j][i] = ".";
        } else if (isHills[j][i] == true) {
          map[j][i] = "^";
        } else if (isMountains[j][i] == true) {
          map[j][i] = "/";
        }
      }
    }
  }

  void draw() {
    for (int i = 0; i < height/cellsize; i++) {
      for (int j = 0; j < width/cellsize; j++) {
        //How to set color for different type?
        
        //noStroke();
        //if (map[j][i].equals("o")) {
        //  fill(0, 0, 255);
        //  //text("~", j*cellsize, i*cellsize);
        //} else if (map[j][i].equals("p")) {
        //  fill(0, 255, 0);
        //  //text(",", j*cellsize, i*cellsize);
        //} else if (map[j][i].equals("h")) {
        //  fill(255, 255, 0);
        //  //text("^", j*cellsize, i*cellsize);
        //} else if (map[j][i].equals("m")) {
        //  fill(100);
        //  //text("/", j*cellsize, i*cellsize);
        //} else if (map[j][i].equals("我")) {
        //  fill(255);
        //  //text("我", j*cellsize, i*cellsize);
        //}
        text(map[j][i], j*cellsize, i*cellsize);
      }
    }
  }
}