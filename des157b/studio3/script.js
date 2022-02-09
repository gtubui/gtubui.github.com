(function(){
  'use strict';
  console.log('loading js');
  
  // TYPEWRITER EFFECT IN TEXT BUBBLES
  function textBubble() {
    if (keyPresses.Enter && positionX > 570 && positionX < 750) {
      TEXTBOXCONTAINER.className = 'showing'; 
      TUTORIAL2.className = 'hidden'; 

      const TYPEWRITER = new Typewriter(TEXT, {
      loop: false,
      delay: 35,
      cursor: null,
      });

      TYPEWRITER
      .typeString('Hm? ')
      .pauseFor(600)
      .typeString('Oh, ')
      .pauseFor(300)
      .typeString('it’s you. ')
      .pauseFor(600)
      .typeString('Looks like you’ve come a long ways since the last time I saw you. ')
      .pauseFor(600)
      .typeString('<br>You should be proud.')
      .start();
    }
  }

  // CHARACTER MOVEMENT
  const SCALE = 0.5;
  const WIDTH = 80; // width of each frame in spritesheet
  const HEIGHT = 60; // height of each frame in spritesheet
  const SCALED_WIDTH = SCALE * WIDTH;
  const SCALED_HEIGHT = SCALE * HEIGHT;
  const CYCLE_LOOP = [0, 1]; // order in which frames are looped
  const FACING_RIGHT = 0;
  const FACING_LEFT = 1;
  const FRAME_LIMIT = 3; // speed at which frames cycle
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
    img.src = 'images/character.png';
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
    const npc = document.querySelector('#npc')
    if (positionX > 570 && positionX < 750) {
      npc.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc.style.filter = '';
    }
    // enter prompt appears but prevents from appearing again when character moves
    if (positionX > 570 && positionX < 750 && first) {
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