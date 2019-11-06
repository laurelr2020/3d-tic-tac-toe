/** Game Pieces */
/**
 * Tic-Tac-Toe X
 */
const leftTopSquareX = [-45, 42, -45, 46, -25, 22, -25, 26, 
                        -25, 42, -25, 46, -45, 22, -45, 26];
const middleTopSquareX = [-10, 42, -10, 46,  10, 22,  10, 26, 
                            10, 42,  10, 46, -10, 22, -10, 26];
const rightTopSquareX = [45, 42, 45, 46, 25, 22, 25, 26, 
                        25, 42, 25, 46, 45, 22, 45, 26];

const leftMiddleSquareX = [ -45, 8, -45, 12, -25, -8, -25, -12, 
                            -25, 8, -25, 12, -45, -8, -45, -12];
const middleSquareX = [-10, 8, -10, 12,  10, -8,  10, -12, 
                        10, 8,  10, 12, -10, -8, -10, -12];
const rightMiddleSquareX = [45, 8, 45, 12, 25, -8, 25, -12, 
                            25, 8, 25, 12, 45, -8, 45, -12];

const leftBottomSquareX = [ -45, -42, -45, -46, -25, -22, -25, -26, 
                            -25, -42, -25, -46, -45, -22, -45, -26];
const middleBottomSquareX = [-10, -42, -10, -46,  10, -22,  10, -26, 
                            10, -42, 10, -46, -10, -22, -10, -26];
const rightBottomSquareX = [45, -42, 45, -46, 25, -22, 25, -26, 
                            25, -42, 25, -46, 45, -22, 45, -26];

/**
 * Tic-Tac-Toe O 
 */
/** radius of O circles */
const outerRadius = 12;
const innerRadius = 8;

/** [centerX, centerY] --> for center of circle */
const leftTopSquareO   = [-35, 35];
const middleTopSquareO = [  0, 34];
const rightTopSquareO  = [ 35, 35];

const leftMiddleSquareO  = [-34, 0];
const middleSquareO      = [  0, 0];
const rightMiddleSquareO = [ 34, 0];

const leftBottomSquareO   = [-34, -35];
const middleBottomSquareO = [  0, -34];
const rightBottomSquareO  = [ 34, -35];

    /**draws tic-tac-toe-board on Green Side of cube */
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

/**draws the X game piece in the square that is passed in as a parameter */
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

/**draws the O game piece in the square that is passed in as a parameter */
function drawOGamePiece(gamePieceCenter){
    glColor3f(1.0, 1.0, 1.0);
    fillCircle(outerRadius, gamePieceCenter[0], gamePieceCenter[1], postiveZ + 1);

    glColor3f(0.0, 1.0, 0.0);
    fillCircle(innerRadius, gamePieceCenter[0], gamePieceCenter[1], postiveZ + 2);
}

/**fills a circle for the O game piece based on the radius and center of circle that is passed in */
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

//canvas coorrdiantes 
let topLeftSquare = new CanvasSquare(300, 400, 230, 330);
let topMiddleSquare = new CanvasSquare(401, 535, 230, 330);
let topRightSquare = new CanvasSquare(536, 635, 230, 330);

let middleLeftSquare = new CanvasSquare(300, 400, 331, 460);
let middleMiddleSquare = new CanvasSquare(401, 535, 331, 460);
let middleRightSquare = new CanvasSquare(536, 635, 331, 460);

let bottomLeftSquare = new CanvasSquare(300, 400, 461, 550);
let bottomMiddleSquare = new CanvasSquare(401, 535, 461, 550);
let bottomRightSquare = new CanvasSquare(536, 635, 461, 550);

function CanvasSquare(xLeft, xRight, yTop, yBottom){
    this.xLeftBorder = xLeft;
    this.xRightBorder = xRight;
    this.yTopBorder = yTop;
    this.yBottomBorder = yBottom;

    this.betweenBounds = function(x, y){
        if(inXBound(x) && inYBound(y)){
            display();
            drawXGamePiece(leftTopSquareX);
        }
    }

    var inXBound = function(x){
        if(x > xLeft && x < xRight) 
            return true;
        else 
            return false;
    }

    var inYBound = function(y){
        if(y > yTop && y < yBottom) 
            return true;
        else 
            return false;
    }
}