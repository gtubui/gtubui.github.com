(function(){
  'use strict';
  console.log('loading js');
  
  // TYPEWRITER EFFECT IN TEXT BUBBLES
  let npc1Initial = true;
  function textBubble() {
    const textbox1 = document.querySelector('#textbox1');
    const textbox2 = document.querySelector('#textbox2');
    const textbox3 = document.querySelector('#textbox3');
    const textbox4 = document.querySelector('#textbox4');

    if (keyPresses.Enter && positionX > 440 && positionX < 569 && npc1Initial) {
      TEXTBOXCONTAINER.className = 'showing'; 
      TUTORIAL2.className = 'hidden'; 

      const TYPEWRITER = new Typewriter(TEXT, {
      loop: false,
      delay: 35,
      cursor: null,
      });

      TYPEWRITER
      .typeString('Hello! ')
      .pauseFor(600)
      .typeString('Do you want to submit a response? ')
      .start();
      npc1Initial = false;
    } 
    if (keyPresses.Enter && positionX > 570 && positionX < 699) {
    }
    if (keyPresses.Enter && positionX > 920 && positionX < 1049) {
    }
    if (keyPresses.Enter && positionX > 1050 && positionX < 1179) {
    }
  }

  // CHARACTER MOVEMENT
  const SCALE = 1; // **make sure to adjust canvas height in html too
  const WIDTH = 140; // width of each frame in spritesheet
  const HEIGHT = 140; // height of each frame in spritesheet
  const SCALED_WIDTH = SCALE * WIDTH;
  const SCALED_HEIGHT = SCALE * HEIGHT;
  const CYCLE_LOOP = [0, 1]; // order in which frames are looped
  const FACING_RIGHT = 0;
  const FACING_LEFT = 1;
  const FRAME_LIMIT = 5; // speed at which frames cycle
  const MOVEMENT_SPEED = 3; // speed at which character walks
  const TUTORIAL = document.querySelector('#tutorial');
  const TUTORIAL2 = document.querySelector('#tutorial2');
  const TEXTBOXCONTAINER = document.querySelector('#textboxContainer');
  const TEXT = document.querySelector('#text');

  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let keyPresses = {};
  let currentDirection = FACING_RIGHT;
  let currentLoopIndex = 0;
  let frameCount = 0;
  let positionX = 0;
  let positionY = 0;
  let img = new Image();

  // allows character to move with keyboard keys
  window.addEventListener('keydown', keyDownListener);
  function keyDownListener(event) {
      keyPresses[event.key] = true;
  }

  // stops character from moving when keys are released
  window.addEventListener('keyup', keyUpListener);
  function keyUpListener(event) {
      keyPresses[event.key] = false;
  }

  // loads spritesheet for character
  function loadImage() {
    img.src = 'images/player.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
  }
  loadImage();

  // draws frames from spritesheet
  function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
                  frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                  canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  }

  let first = true;
  function highlightNPC() {
    // highlights npc when character is near it
    const npc1 = document.querySelector('#npc1')
    const npc2 = document.querySelector('#npc2')
    const npc3 = document.querySelector('#npc3')
    const npc4 = document.querySelector('#npc4')
    if (positionX > 440 && positionX < 569) {
      npc1.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc1.style.filter = '';
    }
    if (positionX > 570 && positionX < 699) {
      npc2.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc2.style.filter = '';
    }
    if (positionX > 920 && positionX < 1049) {
      npc3.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc3.style.filter = '';
    }
    if (positionX > 1050 && positionX < 1179) {
      npc4.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc4.style.filter = '';
    }
    // enter prompt appears but prevents from appearing again when character moves
    if (positionX > 440 && first) {
      TUTORIAL2.className = 'slidein';
      first = false;
    }
  }

  function moveCharacter(deltaX, direction) {
    // prevents character from going off screen
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
      positionX += deltaX;
    }
    //controls direction that character is facing
    currentDirection = direction;
  
    highlightNPC();
    // console.log(positionX);
  }

  function gameLoop() {
    // erases previous image of character when character moves
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;

    // allows character to be controlled with keyboard keys
    if (keyPresses.a || keyPresses.A || keyPresses.ArrowLeft) {
      moveCharacter(-MOVEMENT_SPEED, FACING_LEFT);
      hasMoved = true;
    } else if (keyPresses.d || keyPresses.D || keyPresses.ArrowRight) {
      moveCharacter(MOVEMENT_SPEED, FACING_RIGHT);
      hasMoved = true;
      // movement prompt disappears when character first moves
      TUTORIAL.style.display = 'none';
    }

    // animates character when it moves
    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        currentLoopIndex++;
        if (currentLoopIndex >= CYCLE_LOOP.length) {
          currentLoopIndex = 0;
        }
      }
    }

    // resets character to default stance when character stops moving
    if (!hasMoved) {
      currentLoopIndex = 0;
    }

    drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
    textBubble();
  }

})();