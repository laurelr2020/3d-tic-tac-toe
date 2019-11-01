var cubeVertexX = [];
var cubeVertexY = [];
var cubeVertexZ = [];

const postiveX = 48;
const negativeX = -48;
const postiveY = 48;
const negativeY = -48;
const postiveZ = 48;
const negativeZ = -48;

cubeVertexX[0] = negativeX;   cubeVertexY[0] = negativeY;   cubeVertexZ[0] = negativeZ;
cubeVertexX[1] =  postiveX;   cubeVertexY[1] = negativeY;   cubeVertexZ[1] = negativeZ;
cubeVertexX[2] =  postiveX;   cubeVertexY[2] = negativeY;   cubeVertexZ[2] =  postiveZ;
cubeVertexX[3] = negativeX;   cubeVertexY[3] = negativeY;   cubeVertexZ[3] =  postiveZ;
cubeVertexX[4] = negativeX;   cubeVertexY[4] =  postiveY;   cubeVertexZ[4] = negativeZ;
cubeVertexX[5] =  postiveX;   cubeVertexY[5] =  postiveY;   cubeVertexZ[5] = negativeZ;
cubeVertexX[6] =  postiveX;   cubeVertexY[6] =  postiveY;   cubeVertexZ[6] =  postiveZ;
cubeVertexX[7] = negativeX;   cubeVertexY[7] =  postiveY;   cubeVertexZ[7] =  postiveZ;

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
    glColor3f(0.0, 1.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
    glEnd();
    // face 2:  right verts 1, 2, 6, 5
    glColor3f(0.0, 0.0, 1.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[1], cubeVertexY[1], cubeVertexZ[1]);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
        glVertex3f(cubeVertexX[5], cubeVertexY[5], cubeVertexZ[5]);
    glEnd();
    // face 3:  left  verts 0, 3, 7, 4
    glColor3f(0.0, 1.0, 1.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
        glVertex3f(cubeVertexX[0], cubeVertexY[0], cubeVertexZ[0]);
        glVertex3f(cubeVertexX[4], cubeVertexY[4], cubeVertexZ[4]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
    glEnd();

    // face 4:  top  verts 4, 5, 6, 7
    glColor3f(1.0, 1.0, 0.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[4], cubeVertexY[4], cubeVertexZ[4]);
        glVertex3f(cubeVertexX[5], cubeVertexY[5], cubeVertexZ[5]);
        glVertex3f(cubeVertexX[6], cubeVertexY[6], cubeVertexZ[6]);
        glVertex3f(cubeVertexX[7], cubeVertexY[7], cubeVertexZ[7]);
    glEnd();

    // face 5:  bottom  verts 0, 1, 2, 3
    glColor3f(1.0, 0.0, 1.0);
    glBegin(GL_POLYGON);
        glVertex3f(cubeVertexX[0], cubeVertexY[0], cubeVertexZ[0]);
        glVertex3f(cubeVertexX[1], cubeVertexY[1], cubeVertexZ[1]);
        glVertex3f(cubeVertexX[2], cubeVertexY[2], cubeVertexZ[2]);
        glVertex3f(cubeVertexX[3], cubeVertexY[3], cubeVertexZ[3]);
    glEnd();
}
