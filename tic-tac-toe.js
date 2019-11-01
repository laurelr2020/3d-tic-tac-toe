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

function drawXGamePiece(){
    glBegin(GL_POLYGON);
        glVertex3f( -10,   8, postiveZ + 1);
        glVertex3f( -10,  12, postiveZ + 1);
        glVertex3f(  10,  -8, postiveZ + 1);
        glVertex3f(  10, -12, postiveZ + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(  10,  8, postiveZ + 1);
        glVertex3f(  10, 12, postiveZ + 1);
        glVertex3f( -10, -8, postiveZ + 1);
        glVertex3f( -10,-12, postiveZ + 1);
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