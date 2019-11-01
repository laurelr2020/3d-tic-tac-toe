function drawTicTacToeBoard(){
    glColor3f(1.0, 1.0, 1.0);
    glBegin(GL_POLYGON);
        glVertex3f(18,  45,  postiveZ + 1);
        glVertex3f(22,  45,  postiveZ + 1);
        glVertex3f(18, -45, postiveZ + 1);
        glVertex3f(22, -45, postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(-18,  45, postiveZ + 1);
        glVertex3f(-22,  45, postiveZ + 1);
        glVertex3f(-18, -45, postiveZ + 1);
        glVertex3f(-22, -45, postiveZ + 1);
    glEnd();
    
    glBegin(GL_POLYGON);
        glVertex3f( 45, 18, postiveZ + 1);
        glVertex3f( 45, 22, postiveZ + 1);
        glVertex3f(-45, 18, postiveZ + 1);
        glVertex3f(-45, 22, postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f( 45, -18, postiveZ + 1);
        glVertex3f( 45, -22, postiveZ + 1);
        glVertex3f(-45, -18, postiveZ + 1);
        glVertex3f(-45, -22, postiveZ + 1);
    glEnd();
}

const leftTopSquareX = [-45, 42, -45, 46, -25, 22, -25, 26, 
                        -25, 42, -25, 46, -45, 22, -45, 26];
const middleTopSquareX = [-10, 8, -10, 12,  10, -8,  10, -12, 
                        10, 8,  10, 12, -10, -8, -10, -12];
const rightTopSquareX = [45, 8, 45, 12, 25, -8, 25, -12, 
                        25, 8, 25, 12, 45, -8, 45, -12];

const leftMiddleSquareX = [ -45, 8, -45, 12, -25, -8, -25, -12, 
                            -25, 8, -25, 12, -45, -8, -45, -12];
const middleSquareX = [-10, 8, -10, 12,  10, -8,  10, -12, 
                        10, 8,  10, 12, -10, -8, -10, -12];
const rightMiddleSquareX = [45, 8, 45, 12, 25, -8, 25, -12, 
                            25, 8, 25, 12, 45, -8, 45, -12];

function drawXGamePiece(gamePiecePlace){
    glBegin(GL_POLYGON);
        glVertex3f( gamePiecePlace[0], gamePiecePlace[1], postiveZ + 1);
        glVertex3f( gamePiecePlace[2], gamePiecePlace[3], postiveZ + 1);
        glVertex3f( gamePiecePlace[4], gamePiecePlace[5], postiveZ + 1);
        glVertex3f( gamePiecePlace[6], gamePiecePlace[7], postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f( gamePiecePlace[8],  gamePiecePlace[9],  postiveZ + 1);
        glVertex3f( gamePiecePlace[10], gamePiecePlace[11], postiveZ + 1);
        glVertex3f( gamePiecePlace[12], gamePiecePlace[13], postiveZ + 1);
        glVertex3f( gamePiecePlace[14], gamePiecePlace[15], postiveZ + 1);
    glEnd();
}

//[centerX, centerY]
const leftTopO   = [-35, 35];
const middleTopO = [  0, 34];
const rightTopO  = [ 35, 35];

const leftMiddleO  = [-34, 0];
const middleO      = [  0, 0];
const rightMiddleO = [ 34, 0];

const leftBottomO   = [-34, -35];
const middleBottomO = [  0, -34];
const rightBottomO  = [ 34, -35];

function drawOGamePiece(gamePieceCenter){
    const outerRadius = 12;
    const innerRadius = 8;
    glColor3f(1.0, 1.0, 1.0);
    fillCircle(outerRadius, gamePieceCenter[0], gamePieceCenter[1], postiveZ + 1);

    glColor3f(0.0, 1.0, 0.0);
    fillCircle(innerRadius, gamePieceCenter[0], gamePieceCenter[1], postiveZ + 2);
}

function fillCircle(radius, centerX, centerY, zIndex){
    glBegin(GL_POLYGON);
    for (let thetaInDegrees = 0; thetaInDegrees < 360; thetaInDegrees++) {
        var theta = thetaInDegrees * Math.PI / 180;
        var x = radius * Math.cos(theta) + centerX;
        var y = radius * Math.sin(theta) + centerY;
        glVertex3f(x, y, zIndex);
    } 
    glEnd();
}