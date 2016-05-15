// create map
// var fr = 36;

// var MAPSIZE = 5;
var levelNum = 1;
var gameState = 0;
// 0 TITLE MENU
// 1 GAMEPLAY
// 2 GAME OVER
// 3 YOU WIN

var counter = 60;
var interval;
var timer;
var button;

var cellSize = 32;
var cellSpritesheet;
var cellMap = [];

var energy = [];

var backgroundSprites;
var bgImg;

var playerX = 384;
var playerY = 288;

var agentX = 32;
var agentY = 32;
var agentDirX = 1;
var agentDirY = 0;

var startImg;
var winImg;
var failImg;

var level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 3, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 3, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 1, 0, 1, 1],
  [1, 0, 3, 0, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 3, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 3, 0, 0, 3, 0, 0, 3, 0, 3, 3, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 3, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 1, 0, 0, 1],
  [1, 0, 3, 0, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 3, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1],
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

var ROAD = 0;
var WALLCELL = 1;
var DECISIONCELL = 3;

var currentLevel = level1;


function preload() {
  // specify width and height of each frame and number of frames
  cellFrames = loadJSON('assets/tiles.json');
  cellSpritesheet = loadSpriteSheet('assets/background.png', cellFrames);
  bgImg = loadAnimation(cellSpritesheet);

  // this.astroSheetUp = loadSpriteSheet('assets/astronaut.png', astroUpFrames);
  // this.astroUp = loadAnimation(this.astroSheetUp);
  startImg = loadImage('assets/game1.jpg');
  winImg = loadImage('assets/win.jpg');
  failImg = loadImage('assets/game2.jpg');
  
  backgroundSprites = new Group();
  player = new Player();
  agent = new Agent();

  player.preload();
  agent.preload();
}

function setup() {
  // frameRate(fr);
  background(255);
  // var canvas = createCanvas(768, 544);
  var canvas = createCanvas(256, 256);
  // canvas.position(128, 112);
  restartEverything();
}

function stopTimer() {
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(timeIt, 600);
}

function timeIt() {
  timer.html(counter);
  counter--;
}

function draw() {
  // timer.html(frameCount);
  clear();
  background(255);

  player.update();
  agent.update();
  drawSprites(backgroundSprites);
  drawSprite(player.astro_sprite);
  drawSprite(agent.agent_sprite);

  switch (gameState) {
    case 0:
      displayTitleMenu();
      break;
    case 1:
      displayGameplay();
      break;
    case 2:
      displayGameOver();
      break;
    case 3:
      displayWin();
      break;
    case 4:
      console.log('error!');
      break;
  }

  if (gameState === displayGameplay()) {
    timer = createP('timer');
    // button = createButton('start timer');
    // button.mousePressed(doTimer);
    interval = setInterval(timeIt, 60);
  }
}

// function setupEverything() {
//   cellSetup();
//   player.setup(playerX, playerY, cellSize, cellSize);
//   agent.setup(agentX, agentY, cellSize, cellSize);
// }

function cellSetup() {
  for (var i = 0; i < currentLevel.length; i++) {
    for (var j = 0; j < currentLevel[0].length; j++) {
      var cell = createSprite(j * cellSize, i * cellSize, cellSize, cellSize);
      if (currentLevel[i][j] === 1) {
        cell.addAnimation("wall", "assets/background.png");
        backgroundSprites.add(cell);
      } else if (currentLevel[i][j] === 3) {
        fill(0);
      }
    }
  }
}

function mousePressed() {
  increaseGameState();
}

function increaseGameState() {
  gameState = (gameState + 1) % 4;
}

function changeLevel() {
  
  if (levelNum < 3) {
    levelNum++; // = (mapNum + 1) % 3 + 1;
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
    goalX = 32;
    goalY = 32;
  } else {
    gameState = 3;
    levelNum = 0;
  }
}

function displayGameplay() {
  if (player.x === agent.x && player.y === agent.y) {
    changeLevel();
  }
  
  if (counter === 0) {
    gameState = 2;
    stopTimer();
    restartEverything();
  }
}

function restartEverything() {
  timer = createP('timer');
  button = createButton('START');
  // button.position(384, 277);
  button.mousePressed(startTimer);

  levelNum = 1;
  cellSetup();

  for (var i = 0; i < currentLevel.length; i++) {
    energy[i] = [];
    for (var j = 0; j < currentLevel[0].length; j++) {
      if (currentLevel[i][j] === 0) {
        energy[i][j] = 1;
      }
    }
  }

  player.setup(playerX, playerY, cellSize, cellSize);
  agent.setup(agentX, agentY, cellSize, cellSize);
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

function displayTitleMenu() {
  image(startImg, 0, 0);
}

function displayGameOver() {
  image(failImg, 0, 0);
}

function displayWin() {
  image(winImg, 0, 0);
}