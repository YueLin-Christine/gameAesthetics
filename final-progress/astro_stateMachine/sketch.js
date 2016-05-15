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

var state = 0;
var levelNum = 1;

var portal;


var level1 = [
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


function preload() {
  // specify width and height of each frame and number of frames
  cellFrames = loadJSON('assets/tiles.json');
  cellSpritesheet = loadSpriteSheet('assets/background.png', cellFrames);
  bgImg = loadImage("assets/background.png");
  player = new Player();
  player.preload();
}

function setup() {
  // frameRate(fr);
  // background(0);
  var canvas = createCanvas(768, 544);
  canvas.position(100, 100);

  restartEverything();
  // timer = createP('timer');
  // button = createButton('start timer');
  // button.mousePressed(doTimer);
  // interval = setInterval(timeIt,600);

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
  switch (state) {
    case 0:
      titleMenu();
      break;
    case 1:
      gamePlay();
      break;
    case 2:
      gameOver();
      break;
    case 3:
      gameWin();
      break;
    case 4:
      console.log('error!');
      break;
  }
}

function mousePressed() {
  increaseState();

}

function increaseState() {
  state = (state + 1) % 4;
}

function changeLevel() {
  if (levelNum < 3) {
    levelNum++;
    switch (levelNum) {
      case 1:
        currentMap = level1;
        break;
      case 2:
        currentMap = level2;
        break;
      case 3:
        currentMap = level3;
        break;
      default:
        break;
    }
    player.setup(32, 32, cellSize, cellSize);
    goal.setup()
  } else {
    state = 3;
    levelNum = 0;
  }
}

function movePlayer() {
  if (state === 1) {
    player.update();
  }
}


function gamePlay() {
  backgroundSprites = new Group();
  for (var i = 0; i < level1.length; i++) {
    for (var j = 0; j < level1[0].length; j++) {
      if (currentLevel[i][j] !== 0) {
        var cell = createSprite(j * cellSize, i * cellSize, cellSize, cellSize);
        cell.addAnimation("wall", "assets/background.png");
        // cell.debug= true;
        backgroundSprites.add(cell);
      }
    }
  }
  drawSprites(backgroundSprites);
  drawSprite(player.astro_sprite);
  
  if (player.astro_sprite.position === portal.position) {
    changeLevel();
  }
  if (currentLevel[player.astro_sprite.position.x][player.astro_sprite.position.y] === 2) {
    state = 2;
    restartEverything();
  }
}

function restartEverything() {
  levelNum = 1;
  player.setup(32, 32, cellSize, cellSize);
  switch (levelNum) {
    case 1:
      currentLevel = level1;
      break;
    case 2:
      currentLevel = level2;
      break;
    case 3:
      currentLevel = level3;
      break;
    default:
      break;
  }
}

function titleMenu() {
  fill(0);
  textSize(30);
  text("THE MAP SWITCH GAME!!!", 10, 50);
  textSize(20);
  text("PRESS THE MOUSE TO START!!!", 10, 90);
}

function gameOver() {
  background(255, 0, 0);
  fill(255);
  textSize(30);
  text("YOU LOSE!!!!!!", 10, 50);
  textSize(20);
  text("PRESS THE MOUSE TO WIN!!!", 10, 90);
}

function gameWin() {
  background(30, 100, 150);
  fill(255);
  textSize(30);
  text("YOU WIN!!!!!!", 10, 50);
  textSize(20);
  text("PRESS THE MOUSE TO RESTART!!!", 10, 90);
}