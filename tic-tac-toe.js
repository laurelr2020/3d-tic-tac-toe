function drawTicTacToeBoard(){
    glColor3f(255, 255, 255);
    glBegin(GL_POLYGON);
        glVertex3f(20, 45, cubeVertexZ[2] + 1);
        glVertex3f(24, 45, cubeVertexZ[3] + 1);
        glVertex3f(20, -45, cubeVertexZ[7] + 1);
        glVertex3f(24, -45, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(-20,  45, cubeVertexZ[2] + 1);
        glVertex3f(-24,  45, cubeVertexZ[3] + 1);
        glVertex3f(-20, -45, cubeVertexZ[7] + 1);
        glVertex3f(-24, -45, cubeVertexZ[6] + 1);
    glEnd();
    
    glBegin(GL_POLYGON);
        glVertex3f(45,  18, cubeVertexZ[2] + 1);
        glVertex3f(45,  22, cubeVertexZ[3] + 1);
        glVertex3f(-45, 18, cubeVertexZ[7] + 1);
        glVertex3f(-45, 22, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f( 45, -18, cubeVertexZ[2] + 1);
        glVertex3f( 45, -22, cubeVertexZ[3] + 1);
        glVertex3f(-45, -18, cubeVertexZ[7] + 1);
        glVertex3f(-45, -22, cubeVertexZ[6] + 1);
    glEnd();
}

function drawXGamePiece(){
    glBegin(GL_POLYGON);
        glVertex3f( -10,   8, cubeVertexZ[2] + 1);
        glVertex3f( -10,  12, cubeVertexZ[3] + 1);
        glVertex3f(  10,  -8, cubeVertexZ[7] + 1);
        glVertex3f(  10, -12, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(  10,  8, cubeVertexZ[7] + 1);
        glVertex3f(  10, 12, cubeVertexZ[6] + 1);
        glVertex3f( -10, -8, cubeVertexZ[2] + 1);
        glVertex3f( -10,-12, cubeVertexZ[3] + 1);
    glEnd();
}

function drawOGamePiece(){
    glBegin(GL_LINE_LOOP);
        glVertex2f(  10,  8);
        glVertex2f(  10, 12);
        glVertex2f( -10, -8);
        glVertex2f( -10,-12);
    glEnd();
}