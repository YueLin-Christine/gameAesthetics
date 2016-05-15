function Player() {
  this.x;
  this.y;
  this.astroSheetUp;
  this.astroSheetDown;
  this.astroSheetLeft;
  this.astroSheetRight;

  this.astroUp;
  this.astroDown;
  this.astroLeft;
  this.astroRight;

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

  this.preload = function() {
    //walk
    this.astroSheetUp = loadSpriteSheet('assets/astronaut.png', astroUpFrames);
    this.astroUp = loadAnimation(this.astroSheetUp);
    this.astroSheetDown = loadSpriteSheet('assets/astronaut.png', astroDownFrames);
    this.astroDown = loadAnimation(this.astroSheetDown);
    this.astroSheetLeft = loadSpriteSheet('assets/astronaut.png', astroLeftFrames);
    this.astroLeft = loadAnimation(this.astroSheetLeft);
    this.astroSheetRight = loadSpriteSheet('assets/astronaut.png', astroRightFrames);
    this.astroRight = loadAnimation(this.astroSheetRight);

    //stand
    this.astroSheetUpStand = loadSpriteSheet('assets/astronaut.png', astroUpStandFrames);
    this.astroUpStand = loadAnimation(this.astroSheetUpStand);
    this.astroSheetDownStand = loadSpriteSheet('assets/astronaut.png', astroDownStandFrames);
    this.astroDownStand = loadAnimation(this.astroSheetDownStand);
    this.astroSheetLeftStand = loadSpriteSheet('assets/astronaut.png', astroLeftStandFrames);
    this.astroLeftStand = loadAnimation(this.astroSheetLeftStand);
    this.astroSheetRightStand = loadSpriteSheet('assets/astronaut.png', astroRightStandFrames);
    this.astroRightStand = loadAnimation(this.astroSheetRightStand);
  }

  this.setup = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    //add animation to sprite
    this.astro_sprite = createSprite(this.x, this.y, w, h);

    this.astro_sprite.addAnimation('astroDown', this.astroDown);
    this.astro_sprite.addAnimation('astroUp', this.astroUp);
    this.astro_sprite.addAnimation('astroLeft', this.astroLeft);
    this.astro_sprite.addAnimation('astroRight', this.astroRight);

    this.astro_sprite.addAnimation('astroDownStand', this.astroDownStand);
    this.astro_sprite.addAnimation('astroUpStand', this.astroUpStand);
    this.astro_sprite.addAnimation('astroLeftStand', this.astroLeftStand);
    this.astro_sprite.addAnimation('astroRightStand', this.astroRightStand);
  }

  this.update = function() {
    this.centeredSprite = createVector(this.astro_sprite.position.x + cellSize / 2, this.astro_sprite.position.y + cellSize / 2);
    fill(255, 0, 200);
    ellipse(this.astro_sprite.position.x + cellSize / 2, this.astro_sprite.position.y + cellSize / 2, 2, 2);
    // camera.position = this.astro_sprite.position;

    // interaction
    if (keyCode === UP_ARROW) {
      if (currentLevel[floor((this.centeredSprite.y - 16) / cellSize)][floor(this.centeredSprite.x / cellSize)] === 0) {
        this.astro_sprite.changeAnimation("astroUp");
        this.astro_sprite.position.y -= 2;
        // astro_sprite.addSpeed(.05, -90);
      }
    }
    // if (keyWentUp(UP_ARROW)) {
    //   astro_sprite.changeAnimation("astroUpStand");
    // }

    if (keyCode === DOWN_ARROW) {
      if (currentLevel[floor((this.centeredSprite.y + 16) / cellSize)][floor(this.centeredSprite.x / cellSize)] === 0) {
        this.astro_sprite.changeAnimation("astroDown");
        this.astro_sprite.position.y += 2;
      }
    }
    // if (keyWentUp(DOWN_ARROW)) {
    //   astro_sprite.changeAnimation("astroDownStand");
    // }

    if (keyCode === LEFT_ARROW) {
      if (currentLevel[floor(this.centeredSprite.y / cellSize)][floor((this.centeredSprite.x - 16) / cellSize)] === 0) {
        this.astro_sprite.changeAnimation("astroLeft");
        this.astro_sprite.position.x -= 2;
        // astro_sprite.addSpeed(.05, 90);
      }
    }
    // if (keyWentUp(LEFT_ARROW)) {
    //   astro_sprite.changeAnimation("astroLeftStand");
    // }

    if (keyCode == RIGHT_ARROW) {
      if (currentLevel[floor(this.centeredSprite.y / cellSize)][floor((this.centeredSprite.x + 16) / cellSize)] === 0) {
        this.astro_sprite.changeAnimation("astroRight");
        this.astro_sprite.position.x += 2;
      }
    }
    // if (keyWentUp(RIGHT_ARROW)) {
    //   astro_sprite.changeAnimation("astroRightStand");
    // }
  };

}