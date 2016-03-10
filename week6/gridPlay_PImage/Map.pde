// the map
class Map {
  PImage[][] map;
  int cellsize = 16;
  int x, y;

  boolean[][] isOcean;
  boolean[][] isPlains;
  boolean[][] isHills;
  boolean[][] isMountains;

  Map() { 
    map = new PImage[width/cellsize][height/cellsize];
    //noiseSeed(0);
    noiseDetail(4, 0.65);

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
          map[x][y] = loadImage("ocean.png");
          isOcean[x][y] = true;
        } else if (noiseVal>=0.4 && noiseVal < 0.65) {
          map[x][y] = loadImage("plains.png");
          isPlains[x][y] = true;
        } else if (noiseVal>=0.65 && noiseVal < 0.85) {
          map[x][y] = loadImage("hills.png");
          isHills[x][y] = true;
        } else if (noiseVal>=0.85) {
          map[x][y] = loadImage("mountains.png");
          isMountains[x][y] = true;
        }
      }
    }
  }
  void update() {
    for (int i =0; i < width/cellsize; i++) {
      for (int j =0; j < width/cellsize; j++) {
        if (j == player.xPos && i == player.yPos) {
          map[j][i] = loadImage("me.png");
          //println("me");
        } else if (isOcean[j][i] == true) {
          map[j][i] = loadImage("ocean.png");
        } else if (isPlains[j][i] == true) {
          map[j][i] = loadImage("plains.png");
        } else if (isHills[j][i] == true) {
          map[j][i] = loadImage("hills.png");
        } else if (isMountains[j][i] == true) {
          map[j][i] = loadImage("mountains.png");
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
        image(map[j][i],j*cellsize, i*cellsize);
      }
    }
  }
}