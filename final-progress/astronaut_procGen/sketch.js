// fr = 47;
// create map
var cellFrames;
var cellSize = 16;
var cellSpritesheet;

var COLS = 20;
var ROWS = 20;
var cellMap = [];
// var cells = [];

var backgroundSprites;

var bgImg;

//Create animations from sprite sheets
var mouse_moved = false;
var touch_started = false;


var astroSheetUp;
var astroSheetDown;
var astroSheetLeft;
var astroSheetRight;

var astroUp;
var astroDown;
var astroLeft;
var astroRight;

var astroUpFrames = [{
  "name": "player_up01",
  "frame": {
    "x": 0,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, {
  "name": "player_up02",
  "frame": {
    "x": 32,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, ];
var astroDownFrames = [{
  "name": "player_down01",
  "frame": {
    "x": 64,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, {
  "name": "player_down02",
  "frame": {
    "x": 96,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, ];
var astroLeftFrames = [{
  "name": "player_left01",
  "frame": {
    "x": 0,
    "y": 32,
    "width": 32,
    "height": 32
  }
}, {
  "name": "player_left02",
  "frame": {
    "x": 32,
    "y": 32,
    "width": 32,
    "height": 32
  }
}, ];
var astroRightFrames = [{
  "name": "player_right01",
  "frame": {
    "x": 64,
    "y": 32,
    "width": 32,
    "height": 32
  }
}, {
  "name": "player_right02",
  "frame": {
    "x": 96,
    "y": 32,
    "width": 32,
    "height": 32
  }
}, ];


function preload() {
  // specify width and height of each frame and number of frames
  tileFrames = loadJSON('assets/tiles.json');
  tileSpritesheet = loadSpriteSheet('assets/background.png', tileFrames);
  bgImg = loadImage("assets/background.png");
  
  astroSheetUp = loadSpriteSheet('assets/astronaut.png', astroUpFrames);
  astroUp = loadAnimation(astroSheetUp);
  astroSheetDown = loadSpriteSheet('assets/astronaut.png', astroDownFrames);
  astroDown = loadAnimation(astroSheetDown);
  astroSheetLeft = loadSpriteSheet('assets/astronaut.png', astroLeftFrames);
  astroLeft = loadAnimation(astroSheetLeft);
  astroSheetRight = loadSpriteSheet('assets/astronaut.png', astroRightFrames);
  astroRight = loadAnimation(astroSheetRight);
  
}

function setup() {
  // frameRate(fr);
  createCanvas(windowWidth, windowHeight);
  
  
  backgroundSprites = new Group();
  
  cellSize = width / COLS;
  
  //initialize random world
  var aliveChance = 0.45;
  for (var i = 0; i < COLS; i++) {
    cellMap[i] = [];
    for (var j = 0; j < ROWS; j++) {
      if (random(1) < aliveChance) {
        cellMap[i][j] = true;
      }
    }
  }
  cellMap = generateMap();
  
  for (var x = 0; x < COLS; x++) {
    for (var y = 0; y < ROWS; y++) {
      // if (cellmap[x][y] === true) {
        var cell = createSprite(x*32, y*32);
      //   cell.addImage(bgImg);
      // } else {
        cell.addImage(bgImg);
      // }
      // cells.push(cell);
      backgroundSprites.add(cell);
      // }
    }
  }


  //add animation to sprite
  astro_sprite = createSprite(windowWidth / 2, windowHeight / 2, 0, 0);
  astro_sprite.addAnimation('astroDown', astroDown);
  astro_sprite.addAnimation('astroUp', astroUp);
  astro_sprite.addAnimation('astroLeft', astroLeft);
  astro_sprite.addAnimation('astroRight', astroRight);
  
  
}

// function update(){
  
// }

function draw() {
  clear();
  background(255);
  
  camera.position = astro_sprite.position;
  drawSprites(backgroundSprites);
  drawSprite(astro_sprite);
  
  // interaction
  if (keyDown(UP_ARROW)) {
    astro_sprite.changeAnimation("astroUp");
    astro_sprite.position.y -= 2;
  }
  if (keyDown(DOWN_ARROW)) {
    astro_sprite.changeAnimation("astroDown");
    astro_sprite.position.y += 2;
  }
  if (keyDown(LEFT_ARROW)) {
    astro_sprite.changeAnimation("astroLeft");
    astro_sprite.position.x -= 2;
  }
  if (keyDown(RIGHT_ARROW)) {
    astro_sprite.changeAnimation("astroRight");
    astro_sprite.position.x += 2;
    // }else if(keyWentUp(UP_ARROW) || keyWentUp(DOWN_ARROW) || keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
    //   // astro_sprite.changeAnimation("astroStand");
    //   astro_sprite.position = 0;
  }
}

function generateMap() {
  var numberOfSteps = 5;
  for (var i = 0; i < numberOfSteps; i++) {
    cellMap = doSimulationStep();
  }
  return cellMap;
}

function doSimulationStep() {
  var deathLimit = 3;
  var birthLimit = 4;
  var newMap = [];
  for (var x = 0; x < cellMap.length; x++) {
    newMap[x] = [];
    for (var y = 0; y < cellMap[0].length; y++) {
      var nbs = countAliveNeighbors(cellMap, x, y);
      if (cellMap[x][y]) {
        if (nbs < deathLimit) {
          newMap[x][y] = false;
        } else {
          newMap[x][y] = true;
        }
      } else {
        if (nbs > birthLimit) {
          newMap[x][y] = true;
        } else {
          newMap[x][y] = false;
        }
      }
    }
  }
  return newMap;
}

function countAliveNeighbors(map,x,y) {
  var count = 0;
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      var neighborX = x + i;
      var neighborY = y + j;
      if (!(i === 0 & j === 0)) {
        if (neighborX < 0 || neighborY < 0 || neighborX >= map.length || neighborY >= map[0].length) {
          count = count + 1;
        } else if (map[neighborX][neighborY]) {
          count = count + 1;
        }
      }
    }
  }
  return count;
}