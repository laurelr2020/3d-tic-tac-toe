function drawTicTacToeBoard()
{
    glColor3f(255, 255, 255);
    glBegin(GL_POLYGON);
        glVertex3f(20, 45, cubeVertexZ[2] + 1);
        glVertex3f(24, 45, cubeVertexZ[3] + 1);
        glVertex3f(20, -45, cubeVertexZ[7] + 1);
        glVertex3f(24, -45, cubeVertexZ[6] + 1);
    glEnd();

    glBegin(GL_POLYGON);
        glVertex3f(-20, 45, cubeVertexZ[2] + 1);
        glVertex3f(-24, 45, cubeVertexZ[3] + 1);
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