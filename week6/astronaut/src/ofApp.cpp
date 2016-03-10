#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetFrameRate(30);
    spriteRenderer = new ofxSpriteSheetRenderer(2, 10000, 0, 16);// tileSize:16
    spriteRenderer -> loadTexture("astronaut.png", 64, GL_NEAREST);//
    
    player = new animatingSprite();
    player->pos.set(ofGetWindowWidth()/2, ofGetWindowHeight()/2);
    player->animation = walkAnimation;
    player->animation.index = 6;
    
    for(int i = 0; i < 50; i++){
        for(int j = 0; j < 50; j++){
            basicSprite * background = new basicSprite();
            background->pos.set(j*spriteRenderer->getTileSize()*SCALE,i*spriteRenderer->getTileSize()*SCALE);
            background->tileName=floor(ofRandom(8,12));
            
            //push sprite to background vector: add them to vector
            backgrounds.push_back(background);
        }
    }
}

//--------------------------------------------------------------
void ofApp::update(){
    spriteRenderer->clear();
    spriteRenderer->update(ofGetElapsedTimeMillis());
    
    
    for(int i = 0; i < backgrounds.size(); i++){
        //        spriteRenderer->addTile(backgrounds[i]->tileName, 0, backgrounds[i]->pos.x, backgrounds[i]->pos.y);
        spriteRenderer->addCenteredTile(backgrounds[i]->tileName, 0, backgrounds[i]->pos.x, backgrounds[i]->pos.y, 0, 1, 1, F_NONE, SCALE);
    }
    
    spriteRenderer->addCenteredTile(&player->animation, player->pos.x, player->pos.y, 1, F_NONE, SCALE);
    
    
    //    bool addCenteredTile(animation_t* sprite, float x, float y, int layer = -1,                        flipDirection f = F_NONE, float scale = 1.0, int r=255, int g=255, int b=255, int alpha=255);
    
    
    //if (world.isPlains[player.xPos][player.yPos-1] == true) {
    //    player.yPos -=1;
    //}
    
    
    
    
    //if the tile int the player's next position is not a index 11, the player can keep moving
    
//        if (leftPressed) {
//            if(backgrounds[(player->pos.x * player->pos.y) -1] == ){
//                player->pos.x -= 4;
//            }
//            player->animation.index = 4;
//    
//        }
//        if (rightPressed) {
//    
//            if(){
//    
//            }
//             player->pos.x += 4;
//            player->animation.index = 2;
//        }
//        if (upPressed) {
//    
//            if(){
//                player->pos.y -= 4;
//            }
//            player->animation.index = 0;
//        }
//        if (downPressed) {
//    
//            if(){
//                player->pos.y += 4;
//            }
//            player->animation.index = 6;
//        }
    
    
    if (leftPressed) {
        player->pos.x -= 4;
        player->animation.index = 4;
        
    }
    if (rightPressed) {
        player->pos.x += 4;
        player->animation.index = 2;
    }
    if (upPressed) {
        player->pos.y -= 4;
        player->animation.index = 0;
    }
    if (downPressed) {
        player->pos.y += 4;
        player->animation.index = 6;
    }
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    spriteRenderer->draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    if (key == OF_KEY_LEFT) {
        leftPressed = true;
    }
    if (key == OF_KEY_RIGHT) {
        rightPressed = true;
    }
    if (key == OF_KEY_UP) {
        upPressed = true;
    }
    if (key == OF_KEY_DOWN) {
        downPressed = true;
    }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    if (key == OF_KEY_LEFT) {
        leftPressed = false;
    }
    if (key == OF_KEY_RIGHT) {
        rightPressed = false;
    }
    if (key == OF_KEY_UP) {
        upPressed = false;
    }
    if (key == OF_KEY_DOWN) {
        downPressed = false;
    }
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
    
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
    
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 
    
}
