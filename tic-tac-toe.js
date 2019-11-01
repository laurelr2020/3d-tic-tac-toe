function drawTicTacToeBoard(){
    glColor3f(1.0, 1.0, 1.0);
    glBegin(GL_POLYGON);
        glVertex3f(20,  45,  postiveZ + 1);
        glVertex3f(24,  45,  postiveZ + 1);
        glVertex3f(20, -45, postiveZ + 1);
        glVertex3f(24, -45, postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(-20,  45, postiveZ + 1);
        glVertex3f(-24,  45, postiveZ + 1);
        glVertex3f(-20, -45, postiveZ + 1);
        glVertex3f(-24, -45, postiveZ + 1);
    glEnd();
    
    glBegin(GL_POLYGON);
        glVertex3f(45,  18, postiveZ + 1);
        glVertex3f(45,  22, postiveZ + 1);
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

const middleSquareX = [-10, 8, -10, 12,  10, -8,  10, -12, 
                        10, 8,  10, 12, -10, -8, -10, -12];


function drawXGamePiece(placeX){
    glBegin(GL_POLYGON);
        glVertex3f( placeX[0], placeX[1], postiveZ + 1);
        glVertex3f( placeX[2], placeX[3], postiveZ + 1);
        glVertex3f( placeX[4], placeX[5], postiveZ + 1);
        glVertex3f( placeX[6], placeX[7], postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f( placeX[8],  placeX[9],  postiveZ + 1);
        glVertex3f( placeX[10], placeX[11], postiveZ + 1);
        glVertex3f( placeX[12], placeX[13], postiveZ + 1);
        glVertex3f( placeX[14], placeX[15], postiveZ + 1);
    glEnd();
}

function drawOGamePiece(){
    glColor3f(1.0, 1.0, 1.0);
    fillCircle(15, postiveZ + 1);

    glColor3f(0.0, 1.0, 0.0);
    fillCircle(10, postiveZ + 2);
}

function fillCircle(radius, zIndex){
    glBegin(GL_POLYGON);
    for (let thetaInDegrees = 0; thetaInDegrees < 360; thetaInDegrees++) {
        var theta = thetaInDegrees * Math.PI / 180;
        var x = radius * Math.cos(theta);
        var y = radius * Math.sin(theta);
        glVertex3f(x, y, zIndex);
    } 
    glEnd();
}