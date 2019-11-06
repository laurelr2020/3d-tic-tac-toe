var frameNumber = 0;
var eyeX, eyeY, eyeZ, origEyeX, origEyeY, origEyeZ;
var atX, atY, atz, origAtX, origAtY, origAtZ;
var y;
var rotationTurnedOn = false;
var shiftBeingHeld = false;

/**
*  Called when the display needs be redrawn.  Usually, it will completely
*  redraw the image.  Note that the projection could be set up in initGL()
*  if it is not going to change.
*/
function display() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(60.0, 1.0, 10.0, 1000.0);

    gluLookAt(eyeX, eyeY, eyeZ,
                atX, atY, atZ,
                0, 1, 0);

    if (rotationTurnedOn) {
        glPushMatrix();
        var angle = frameNumber % 360;
        glRotatef(angle, 0, 1, 0);
    }

    drawCube();
    drawTicTacToeBoard();
    
    if (rotationTurnedOn) {
        glPopMatrix();
    }
}

// --------------- support for key events ----------------------------------------

/**
* Set up in init() to be called when the user presses a key on the keyboard.
* The value of keyCode will be a number that identifies the key that was pressed.
* Notable values include 38, 39, 40, and 41 for the left, up, right, and down
* arrow keys.  Keys that represent a character such as 'a' or space generally have
* the ASCII code of the character as their keyCode (32 for space, 13 for enter/return,
* 96 for 'a', 97 for 'b', and so on).
*/
function doKeyDown(evt) {
    var keyCode = evt.keyCode;  // code for the key that was pressed
    
    if (keyCode >=34 && keyCode <= 40) {
        evt.preventDefault(); // Stop page from scrolling for arrow keys, home, end, pageup, pagedown.
    }
    if (evt.shiftKey) 
        shiftBeingHeld = true;
        
    switch( keyCode ) {
        case 37:  eyeX -= 10; break; // left arrow
        case 38:  if (shiftBeingHeld) {
                    atY += 10;
                }
                else {
                    eyeY += 10;
                }
                break; // up arrow
        case 39:  eyeX += 10; break; // right arrow
        case 40:  eyeY -= 10; break;  // down arrow
        case 34:  /* subtract 1 from eyeZ or atZ */ break; // page down
        case 33:  /* add 1 to eyeZ or atZ */ break; // page up
        case 36: atX = origAtX;
                atY = origAtY;
                atZ = origAtZ;
                eyeX = origEyeX;
                eyeY = origEyeY;
                eyeZ = origEyeZ; break; // home
        case 82:
        case 114: rotationTurnedOn = !rotationTurnedOn;  // the letter R
    }
    
    display(); 
}

function doKeyUp(evt) {
    if (evt.shiftKey)
        shiftBeingHeld = false;
}

// --------------- support for mouse events --------------------------------------
function doMouseDown(evt) {
    if (evt.button != 0) {
        return;  // don't respond unless the button is the main (left) mouse button.
    }
    var canvas = document.getElementById("glcanvas");
    var r = canvas.getBoundingClientRect();
    var x,y;
    x = Math.round(evt.clientX - r.left);  // translate mouse position from screen coords to canvas coords.
    y = Math.round(evt.clientY - r.top);   // round to integer values; some browsers would give non-integers.
    
    topLeftSquare.betweenBounds(x, y);
}

// --------------- support for animation ------------------------------------------

/** You can call startAnimation() to run an animation.  A frame will be drawn every
 * 30 milliseconds (can be changed in the call to glutTimerFunc.  The global frameNumber
 * variable will be incremented for each frame.  Call pauseAnimation() to stop animating.
 */

var animating = false;      // indicates whether an animation is in progress;
                            // do not change directly; call startAnimation() and pauseAnimation()

function updateFrame() {
    // TODO: INSERT CODE TO UPDATE ANY OTHER DATA USED IN DRAWING A FRAME
    y += 0.3;
    if (y > 60) {
        y = -50;
    }
    frameNumber++;
}

function timerFunction() {
    if (animating) {
        updateFrame();
        display();
        setTimeout(timerFunction, 30);
    }
}

function startAnimation() {
        // call this to start or restart the animation.
    if ( ! animating ) {
        animating = true;
        setTimeout(timerFunction, 30);
    }
}

function pauseAnimation() {
            // call this to pause the animation.
    animating = 0;
}
// ------------------------- initialization functions -----------------------------------

/**
*  initGL() is called just once, by main(), to do initialization of OpenGL state
*  and other global state.
*/
function initGL() {
    glClearColor(0.0, 0.0, 0.0, 1.0);
    
    glColor3f(1.0, 1.0, 1.0);

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluPerspective(60.0, 1.0, 10.0, 1000.0);

    eyeX = origEyeX = 0;
    eyeY = origEyeY = 30;
    eyeZ = origEyeZ = 200;
    
    atX = origAtX = 10;
    atY = origAtY = 10;
    atZ = origAtZ = 10;
    
    y = 10.0;

    gluLookAt(eyeX, eyeY, eyeZ,
            atX,  atY,  atZ,
                0, 1, 0);
            
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);	

    //TODO: Uncomment the following 4 lines to do some typical initialization for lighting and materials.
    //glEnable(GL_LIGHTING);        // Enable lighting.
    //glEnable(GL_LIGHT0);          // Turn on a light.  By default, shines from direction of viewer.
    //glEnable(GL_NORMALIZE);       // OpenGL will make all normal vectors into unit normals
    //glEnable(GL_COLOR_MATERIAL);  // Material ambient and diffuse colors can be set by glColor*
}

function init() {
    try {
        glsimUse("glcanvas");
    }catch (e) {
        document.getElementById("canvas-holder").innerHTML =
            "Sorry, an error occured:<br>" + e;
        return;
    }
    initGL();
    display();
    document.addEventListener("keydown", doKeyDown, false);
    document.addEventListener("keyup", doKeyUp, false);
    document.addEventListener("mousedown", doMouseDown, false);
    startAnimation();
}