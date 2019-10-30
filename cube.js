var angleToRotate = 0;
var cubeVertexX = [];
var cubeVertexY = [];
var cubeVertexZ = [];

cubeVertexX[0] = -9.0;   cubeVertexY[0] =  0.0;   cubeVertexZ[0] = -1.0;
cubeVertexX[1] = -7.0;   cubeVertexY[1] =  0.0;   cubeVertexZ[1] = -1.0;
cubeVertexX[2] = -7.0;   cubeVertexY[2] =  0.0;   cubeVertexZ[2] =  1.0;
cubeVertexX[3] = -9.0;   cubeVertexY[3] =  0.0;   cubeVertexZ[3] =  1.0;
cubeVertexX[4] = -9.0;   cubeVertexY[4] = 2.0;   cubeVertexZ[4] = -1.0;
cubeVertexX[5] = -7.0;   cubeVertexY[5] = 2.0;   cubeVertexZ[5] =  -1.0;
cubeVertexX[6] = -7.0;   cubeVertexY[6] = 2.0;   cubeVertexZ[6] =  1.0;
cubeVertexX[7] = -9.0;   cubeVertexY[7] = 2.0;   cubeVertexZ[7] =  1.0;

function drawCube() {
    // face 0:  front
    glColor3f(1.0, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[0], cubeVertexY[0], cubeVertexZ[0]);
        glVertex3f(cubeVertexX[1], cubeVertexY[1], cubeVertexZ[1]);
        glVertex3f(cubeVertexX[5], cubeVertexY[5], cubeVertexZ[5]);
        glVertex3f(cubeVertexX[4], cubeVertexY[4], cubeVertexZ[4]);
    glEnd();
    // face 1:  back
    glColor3f(0.80, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
    glEnd();
    // face 2:  right verts 1, 2, 6, 5
    glColor3f(0.64, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[1], cubeVertexY[1], cubeVertexZ[1]);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
        glVertex3f(cubeVertexX[5], cubeVertexY[5], cubeVertexZ[5]);
    glEnd();
    // face 3:  left  verts 0, 3, 7, 4
    glColor3f(0.48, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
        glVertex3f(cubeVertexX[0], cubeVertexY[0], cubeVertexZ[0]);
        glVertex3f(cubeVertexX[4], cubeVertexY[4], cubeVertexZ[4]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
    glEnd();

    // face 4:  top  verts 4, 5, 6, 7
    glColor3f(0.32, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[4], cubeVertexY[4], cubeVertexZ[4]);
        glVertex3f(cubeVertexX[5], cubeVertexY[5], cubeVertexZ[5]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
    glEnd();

    // face 5:  bottom  verts 0, 1, 2, 3
    glColor3f(0.25, 0.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[0], cubeVertexY[0], cubeVertexZ[0]);
        glVertex3f(cubeVertexX[1], cubeVertexY[1], cubeVertexZ[1]);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
    glEnd();
} // end of drawThePartialPolyhedron
