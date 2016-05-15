function Agent() {
  this.x;
  this.y;
  this.agentSheetUp;
  this.agentSheetDown;
  this.agentSheetLeft;
  this.agentSheetRight;

  this.agentUp;
  this.agentDown;
  this.agentLeft;
  this.agentRight;

  //walk
  var agentUpFrames = [{
    "name": "agent_up01",
    "frame": {
      "x": 0,
      "y": 0,
      "width": 32,
      "height": 32
    }
  }, {
    "name": "agent_up02",
    "frame": {
      "x": 32,
      "y": 0,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentDownFrames = [{
    "name": "player_down01",
    "frame": {
      "x": 64,
      "y": 0,
      "width": 32,
      "height": 32
    }
  }, {
    "name": "agent_down02",
    "frame": {
      "x": 96,
      "y": 0,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentLeftFrames = [{
    "name": "agent_left01",
    "frame": {
      "x": 0,
      "y": 32,
      "width": 32,
      "height": 32
    }
  }, {
    "name": "agent_left02",
    "frame": {
      "x": 32,
      "y": 32,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentRightFrames = [{
    "name": "agent_right01",
    "frame": {
      "x": 64,
      "y": 32,
      "width": 32,
      "height": 32
    }
  }, {
    "name": "agent_right02",
    "frame": {
      "x": 96,
      "y": 32,
      "width": 32,
      "height": 32
    }
  }, ];

  //stand
  var agentUpStandFrames = [{
    "name": "agent_upStand",
    "frame": {
      "x": 0,
      "y": 64,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentDownStandFrames = [{
    "name": "agent_downStand",
    "frame": {
      "x": 32,
      "y": 64,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentLeftStandFrames = [{
    "name": "player_leftStand",
    "frame": {
      "x": 64,
      "y": 64,
      "width": 32,
      "height": 32
    }
  }, ];
  var agentRightStandFrames = [{
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
    this.agentSheetUp = loadSpriteSheet('assets/agent.png', agentUpFrames);
    this.agentUp = loadAnimation(this.agentSheetUp);
    this.agentSheetDown = loadSpriteSheet('assets/agent.png', agentDownFrames);
    this.agentDown = loadAnimation(this.agentSheetDown);
    this.agentSheetLeft = loadSpriteSheet('assets/agent.png', agentLeftFrames);
    this.agentLeft = loadAnimation(this.agentSheetLeft);
    this.agentSheetRight = loadSpriteSheet('assets/agent.png', agentRightFrames);
    this.agentRight = loadAnimation(this.agentSheetRight);

    //stand
    this.agentSheetUpStand = loadSpriteSheet('assets/agent.png', agentUpStandFrames);
    this.agentUpStand = loadAnimation(this.agentSheetUpStand);
    this.agentSheetDownStand = loadSpriteSheet('assets/agent.png', agentDownStandFrames);
    this.agentDownStand = loadAnimation(this.agentSheetDownStand);
    this.agentSheetLeftStand = loadSpriteSheet('assets/agent.png', agentLeftStandFrames);
    this.agentLeftStand = loadAnimation(this.agentSheetLeftStand);
    this.agentSheetRightStand = loadSpriteSheet('assets/agent.png', agentRightStandFrames);
    this.agentRightStand = loadAnimation(this.agentSheetRightStand);
  }

  this.setup = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    //add animation to sprite
    this.agent_sprite = createSprite(this.x, this.y, w, h);

    this.agent_sprite.addAnimation('agentDown', this.agentDown);
    this.agent_sprite.addAnimation('agentUp', this.agentUp);
    this.agent_sprite.addAnimation('agentLeft', this.agentLeft);
    this.agent_sprite.addAnimation('agentRight', this.agentRight);

    this.agent_sprite.addAnimation('agentDownStand', this.agentDownStand);
    this.agent_sprite.addAnimation('agentUpStand', this.agentUpStand);
    this.agent_sprite.addAnimation('agentLeftStand', this.agentLeftStand);
    this.agent_sprite.addAnimation('agentRightStand', this.agentRightStand);
  };

  this.update = function() {

    this.centeredSprite = createVector(this.agent_sprite.position.x + cellSize / 2, this.agent_sprite.position.y + cellSize / 2);
    agentX = floor((this.centeredSprite.x) / cellSize);
    agentY = floor((this.centeredSprite.y) / cellSize);
    this.x = agentX;
    this.y = agentY;

    // println("centerX = " + this.centeredSprite.x + " centerY =" + this.centeredSprite.y);
    // println();
    // println("thisX = " + this.x + " thisY =" + this.y);

    this.nextLeftX = floor((this.centeredSprite.x - 16) / cellSize);
    this.nextRightX = floor((this.centeredSprite.x + 16) / cellSize);
    this.nextTopY = floor((this.centeredSprite.y - 16) / cellSize);
    this.nextDownY = floor((this.centeredSprite.y + 16) / cellSize);


    fill(255, 0, 200);
    ellipse(this.agent_sprite.position.x + cellSize / 2, this.agent_sprite.position.y + cellSize / 2, 2, 2);
    //we're only registering moves when the player actually changes tiles, not actually when the key is pressed.
    //this prevents the agent from moving when the player is accidentally moving into a wall or something. 
    if (player.moved === true) {
      //we're only registering moves when the player actually changes tiles, not actually when the key is pressed.
      //this prevents the agent from moving when the player is accidentally moving into a wall or something. 

      if (currentLevel[agentY][agentX] !== DECISIONCELL && agentX !== 0) {
        //----------------------------------------------------------------
        // if the agent isn't at the "portal" on the left and right, and is not at a decision node
        //----------------------------------------------------------------
        if (currentLevel[agentY + agentDirY][agentX + agentDirX] === 1) {
          //if there is a wall in front at the currentLevelrrent direction

          if (agentDirX !== 0) {
            //if the agent is moving horizontally  
            if (currentLevel[agentY + 1][agentX] !== WALLCELL) {
              //if there is an empty space below the agent, change direction to DOWN
              agentDirY = 1;
              agentDirX = 0;
            } else if (currentLevel[agentY - 1][agentX] !== WALLCELL) {
              //if there is an empty space above the agent, change direction to UP
              agentDirY = -1;
              agentDirX = 0;
            }
          } else if (agentDirY !== 0) {
            //if the agent is moving vertically
            if (currentLevel[agentY][agentX + 1] !== WALLCELL) {
              //if there is an empty space to the right of the agent, change direction to RIGHT
              agentDirY = 0;
              agentDirX = 1;
            } else if (currentLevel[agentY][agentX - 1] !== WALLCELL) {
              //if there is an empty space to the left of the agent, change direction to LEFT
              agentDirY = 0; //stop moving vertically
              agentDirX = -1; //move towards the left
            }
          }
        }
      } else {
        //----------------------------------------------------------------
        //agent is in a decision node: re-assess direction based on target
        //----------------------------------------------------------------
        if (agentX !== 0 && agentX !== 27) {
          //if agent is not in "portal" locations

          if (agentDirX !== 0) {
            //if the agent is moving horizontally  

            var upFree = false;
            var downFree = false;
            var continueFree = false;
            var distDown = 0;
            var distUp = 0;
            var distCont = 0;

            // if space below agent is free
            if (currentLevel[agentY + 1][agentX] !== WALLCELL) {
              downFree = true;
              distDown = dist(agentX, agentY + 1, playerX, playerY);
              line1x = agentX;
              line1y = agentY + 1;
            }
            // if space above agent is free
            if (currentLevel[agentY - 1][agentX] !== WALLCELL) {
              upFree = true;
              distUp = dist(agentX, agentY - 1, playerX, playerY);
              if (line1x === 0) {
                line1x = agentX;
                line1y = agentY - 1;
              } else {
                line2x = agentX;
                line2y = agentY - 1;
              }
            }
            // if continue direction space is free
            if (currentLevel[agentY][agentX + agentDirX] !== WALLCELL) {
              continueFree = true;
              distCont = dist(agentX + agentDirX, agentY, playerX, playerY);
              if (line2x === 0) {
                line2x = agentX + agentDirX;
                line2y = agentY;
              } else {
                line3x = agentX + agentDirX;
                line3y = agentY;
              }
            }


            if (downFree && upFree && continueFree) {
              if (distDown < distUp && distDown < distCont) {
                agentDirX = 0;
                agentDirY = 1;
              } else if (distUp < distDown && distUp < distCont) {
                agentDirX = 0;
                agentDirY = -1;
              } else if (distCont < distUp && distCont < distDown) {}
            } else if (downFree && upFree) {
              if (distDown < distUp) {
                // change direction to DOWN
                agentDirX = 0;
                agentDirY = 1;
              } else {
                // change direction to UP
                agentDirX = 0;
                agentDirY = -1;
              }
            } else if (downFree && continueFree) {
              if (distDown < distCont) {
                // change direction to DOWN
                agentDirX = 0;
                agentDirY = 1;
              } else {
                // continue in same direction
              }
            } else if (upFree && continueFree) {
              if (distUp < distCont) {
                // change direction to UP
                agentDirX = 0;
                agentDirY = -1;
              } else {
                // continue in same direction
              }
            }
          } else if (agentDirY !== 0) {
            //agent is moving in y direction
            var leftFree = false;
            var rightFree = false;
            continueFree = false;
            var distLeft = 0;
            var distRight = 0;
            distCont = 0;

            // if space to the right of agent is free
            if (currentLevel[agentY][agentX + 1] !== WALLCELL) {
              rightFree = true;
              distRight = dist(agentX + 1, agentY, playerX, playerY);
              line1x = agentX + 1;
              line1y = agentY;
            }

            // if space to the left of agent is free
            if (currentLevel[agentY][agentX - 1] !== WALLCELL) {
              leftFree = true;
              distLeft = dist(agentX - 1, agentY, playerX, playerY);
              if (line1x === 0) {
                line1x = agentX - 1;
                line1y = agentY;
              } else {
                line2x = agentX - 1;
                line2y = agentY;
              }
            }

            // if space in current direction is free
            if (currentLevel[agentY + agentDirY][agentX] !== WALLCELL) {
              continueFree = true;
              distCont = dist(agentX, agentY + agentDirY, playerX, playerY);
              if (line2x === 0) {
                line2x = agentX;
                line2y = agentY + agentDirY;
              } else {
                line3x = agentX;
                line3y = agentY + agentDirY;
              }
            }

            if (leftFree && rightFree && continueFree) {
              if (distLeft < distRight && distLeft < distCont) {
                agentDirX = -1;
                agentDirY = 0;
              } else if (distRight < distLeft && distRight < distCont) {
                agentDirX = 1;
                agentDirY = 0;
              } else if (distCont < distLeft && distCont < distRight) {}
            } else if (leftFree && rightFree) {
              if (distLeft < distRight) {
                // change direction to LEFT
                agentDirX = -1;
                agentDirY = 0;
              } else {
                // change direction to RIGHT
                agentDirX = 1;
                agentDirY = 0;
              }
            } else if (leftFree && continueFree) {
              if (distLeft < distCont) {
                // change direction to LEFT
                agentDirX = -1;
                agentDirY = 0;
              } else {
                // continue in same direction
              }
            } else if (rightFree && continueFree) {
              if (distRight < distCont) {
                // change direction to RIGHT
                agentDirX = 1;
                agentDirY = 0;
              } else {
                // continue in same direction
              }
            }
          }
        }
      }

      //----------------------------------------------------------------
      // direction has been decided, move agent
      //----------------------------------------------------------------
      if (agentX === 0 && agentY === 14 && agentDirX === -1) {
        // if agent is in left portal, going left, warp to right side of the screen
        agentX = 27;
      } else if (agentX == 27 && agentY == 14 && agentDirX == 1) {
        // if agent is in right portal, going right, warp to left side of screen
        agentX = 0;
      } else {
        // add movement to agent position
        agentX += agentDirX;
        agentY += agentDirY;
      }
    }
  }
}