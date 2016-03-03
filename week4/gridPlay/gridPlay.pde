Player player;
Map map;

void setup() {

  size(500, 500);
  player = new Player();
  map = new Map();
  myFont = createFont("HannotateSC-W5", 14);
  textFont(myFont);
  //ePosX = round(ePosX/10) *10;
  //ePosY = round(ePosY/10) *10;
  map.create();
}

void draw() { 
  background(0); 
  map.update();
  map.draw();
  //player.draw();
}