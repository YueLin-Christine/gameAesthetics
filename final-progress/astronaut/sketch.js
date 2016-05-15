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

//walk
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

//stand
var astroUpStandFrames = [{
  "name": "player_upStand",
  "frame": {
    "x": 0,
    "y": 64,
    "width": 32,
    "height": 32
  }
}, ];
var astroDownStandFrames = [{
  "name": "player_downStand",
  "frame": {
    "x": 32,
    "y": 64,
    "width": 32,
    "height": 32
  }
}, ];
var astroLeftStandFrames = [{
  "name": "player_leftStand",
  "frame": {
    "x": 64,
    "y": 64,
    "width": 32,
    "height": 32
  }
}, ];
var astroRightStandFrames = [{
  "name": "player_rightStand",
  "frame": {
    "x": 96,
    "y": 64,
    "width": 32,
    "height": 32
  }
}, ];


function preload() {
  // specify width and height of each frame and number of frames
  cellFrames = loadJSON('assets/tiles.json');
  cellSpritesheet = loadSpriteSheet('assets/background.png', cellFrames);
  bgImg = loadImage("assets/background.png");
  

  //walk
  astroSheetUp = loadSpriteSheet('assets/astronaut.png', astroUpFrames);
  astroUp = loadAnimation(astroSheetUp);
  astroSheetDown = loadSpriteSheet('assets/astronaut.png', astroDownFrames);
  astroDown = loadAnimation(astroSheetDown);
  astroSheetLeft = loadSpriteSheet('assets/astronaut.png', astroLeftFrames);
  astroLeft = loadAnimation(astroSheetLeft);
  astroSheetRight = loadSpriteSheet('assets/astronaut.png', astroRightFrames);
  astroRight = loadAnimation(astroSheetRight);

  //stand
  astroSheetUpStand = loadSpriteSheet('assets/astronaut.png', astroUpStandFrames);
  astroUpStand = loadAnimation(astroSheetUpStand);
  astroSheetDownStand = loadSpriteSheet('assets/astronaut.png', astroDownStandFrames);
  astroDownStand = loadAnimation(astroSheetDownStand);
  astroSheetLeftStand = loadSpriteSheet('assets/astronaut.png', astroLeftStandFrames);
  astroLeftStand = loadAnimation(astroSheetLeftStand);
  astroSheetRightStand = loadSpriteSheet('assets/astronaut.png', astroRightStandFrames);
  astroRightStand = loadAnimation(astroSheetRightStand);

}

function setup() {
  // frameRate(fr);
  // background(0);
  createCanvas(768, 544);

  // timer = createP('timer');
  // button = createButton('start timer');
  // button.mousePressed(doTimer);
  // interval = setInterval(timeIt,60000);

  backgroundSprites = new Group();

  //add animation to sprite
  astro_sprite = createSprite(32, 32, cellSize, cellSize);

  astro_sprite.addAnimation('astroDown', astroDown);
  astro_sprite.addAnimation('astroUp', astroUp);
  astro_sprite.addAnimation('astroLeft', astroLeft);
  astro_sprite.addAnimation('astroRight', astroRight);

  astro_sprite.addAnimation('astroDownStand', astroDownStand);
  astro_sprite.addAnimation('astroUpStand', astroUpStand);
  astro_sprite.addAnimation('astroLeftStand', astroLeftStand);
  astro_sprite.addAnimation('astroRightStand', astroRightStand);

  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[0].length; j++) {
      if (level[i][j] !== 0) {
        var cell = createSprite(j * cellSize, i * cellSize, cellSize, cellSize);
        cell.addAnimation("wall", "assets/background.png");
        backgroundSprites.add(cell);
      }
    }
  }
}

var level = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];



// function doTimer(){
//   interval = setInterval(timeIt,1000);
// }

// function stopTimer(){
//   clearInterval(interval);
// }

// function timeIt(){
//   timer.html(counter);
//   counter--;
// }

function draw() {
  // timer.html(frameCount);
  clear();
  background(255);

  // console.log("x in gridspace: " + floor(astro_sprite.position.x/32));
  // console.log("y in gridspace: " + floor(astro_sprite.position.y/32));

  // camera.position = astro_sprite.position;
  drawSprites(backgroundSprites);
  drawSprite(astro_sprite);

  var centeredSprite = createVector(astro_sprite.position.x + cellSize / 2, astro_sprite.position.y + cellSize / 2);
  fill(255, 0, 200);
  ellipse(astro_sprite.position.x + cellSize / 2, astro_sprite.position.y + cellSize / 2, 2, 2);

  // interaction
  if (keyCode == UP_ARROW) {
    if (level[floor((centeredSprite.y - 16) / cellSize)][floor(centeredSprite.x / cellSize)] === 0) {
      astro_sprite.changeAnimation("astroUp");
      astro_sprite.position.y -= 2;
      // astro_sprite.addSpeed(.05, -90);
    }
  }
  // if (keyWentUp(UP_ARROW)) {
  //   astro_sprite.changeAnimation("astroUpStand");
  // }
  
  if (keyCode == DOWN_ARROW) {
    if (level[floor((centeredSprite.y + 16) / cellSize)][floor(centeredSprite.x / cellSize)] === 0) {
      astro_sprite.changeAnimation("astroDown");
      astro_sprite.position.y += 2;
    }
  }
  // if (keyWentUp(DOWN_ARROW)) {
  //   astro_sprite.changeAnimation("astroDownStand");
  // }

  if (keyCode == LEFT_ARROW) {
    if (level[floor(centeredSprite.y / cellSize)][floor((centeredSprite.x - 16) / cellSize)] === 0) {
      astro_sprite.changeAnimation("astroLeft");
      astro_sprite.position.x -= 2;
      // astro_sprite.addSpeed(.05, 90);
    }
  }
  // if (keyWentUp(LEFT_ARROW)) {
  //   astro_sprite.changeAnimation("astroLeftStand");
  // }

  if (keyCode == RIGHT_ARROW) {
    if (level[floor(centeredSprite.y / cellSize)][floor((centeredSprite.x + 16) / cellSize)] === 0) {
      astro_sprite.changeAnimation("astroRight");
      astro_sprite.position.x += 2;
    }
  }
  // if (keyWentUp(RIGHT_ARROW)) {
  //   astro_sprite.changeAnimation("astroRightStand");
  // }
  // else if (!keyDown(UP_ARROW) && !keyDown(DOWN_ARROW) && !keyDown(LEFT_ARROW) && !keyDown(RIGHT_ARROW)) {
  //   if (!keyDown(UP_ARROW)) {
  //     astro_sprite.changeAnimation("astroUpStand");
  //   }
  //   if (!keyDown(DOWN_ARROW)) {
  //     astro_sprite.changeAnimation("astroDownStand");
  //   }
  //   if (!keyDown(LEFT_ARROW)) {
  //     astro_sprite.changeAnimation("astroLeftStand");
  //   }
  //   if (!keyDown(RIGHT_ARROW)) {
  //     astro_sprite.changeAnimation("astroRightStand");
  //   }
  // }
}