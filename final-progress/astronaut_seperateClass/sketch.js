// create map
// var fr = 36;
var counter = 60;
var interval;
var timer;
var button;

var cellSize = 32;
var cellSpritesheet;
var cellMap = [];

var backgroundSprites;
var bgImg;

var ghost;


var level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 3, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 3, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var level3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 3, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
var road = 0;
var wall = 1;
var decision = 3;

var currentLevel = level1;


var astroUpFrames = [{
  "name": "road",
  "frame": {
    "x": 0,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, ];

var astroUpFrames = [{
  "name": "wall",
  "frame": {
    "x": 0,
    "y": 0,
    "width": 32,
    "height": 32
  }
}, ];


function preload() {
  // specify width and height of each frame and number of frames
  cellFrames = loadJSON('assets/tiles.json');
  cellSpritesheet = loadSpriteSheet('assets/background.png', cellFrames);
  bgImg = loadAnimation(cellSpritesheet);
  
  // this.astroSheetUp = loadSpriteSheet('assets/astronaut.png', astroUpFrames);
  // this.astroUp = loadAnimation(this.astroSheetUp);
  
  player = new Player();
  player.preload();
  

}

function setup() {
  // frameRate(fr);
  // background(0);
  var canvas = createCanvas(768, 544);
  // var canvas = createCanvas(128,128);
  canvas.position(10, 10);

  // timer = createP('timer');
  // button = createButton('start timer');
  // button.mousePressed(doTimer);
  // interval = setInterval(timeIt,600);

  player.setup(32, 32, cellSize, cellSize);
  backgroundSprites = new Group();
  for (var i = 0; i < currentLevel.length; i++) {
    for (var j = 0; j < currentLevel[0].length; j++) {
      var cell = createSprite(j * cellSize, i * cellSize, 32, cellSize);
      if (currentLevel[i][j] === 0) {
        cell.addAnimation("wall", "assets/background.png");
        backgroundSprites.add(cell);
        // this.astro_sprite = createSprite(this.x, this.y, w, h);
  // this.astro_sprite.addAnimation('astroDown', this.astroDown);
      }
    }
  }
}

// function doTimer() {
//   interval = setInterval(timeIt, 10000);
// }

// function stopTimer(){
//   clearInterval(interval);
// }

// function timeIt() {
//   timer.html(counter);
//   counter--;
// }

function draw() {
  // timer.html(frameCount);
  clear();
  background(255);

  player.update();
  drawSprites(backgroundSprites);
  drawSprite(player.astro_sprite);
}