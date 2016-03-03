Player player;
Map map;

void setup() {
  size(500, 500);
  map = new Map();
  player = new Player();
  myFont = createFont("HannotateSC-W5", 16);
  textFont(myFont);
  map.create();
}

void draw() { 
  background(0); 
  map.update();
  map.draw();
  //player.draw();
}