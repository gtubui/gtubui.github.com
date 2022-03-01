(function(){
  'use strict';
  console.log('loading js');

  Parse.initialize('x3kjJoazxO1qh4Jxsrvd6OciU1cG1Xf98l8la2aT','acqlo6WFXsQHH3ezFWoDqYK82Tg4hrstcghrt5U4'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/'
  
  // DIALOGUE
  function textBubble() {
    const dialogueContainer1 = document.querySelector('#dialogueContainer1');
    const dialogueContainer2 = document.querySelector('#dialogueContainer2');
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    const text4 = document.querySelector('#text4');
    const buttons1 = document.querySelector('#buttons');
    const yesBtn1 = document.querySelector('#yes1');
    const noBtn1 = document.querySelector('#no1');
    const yesBtn2 = document.querySelector('#yes2');
    const noBtn2 = document.querySelector('#no2');
    const responseField = document.querySelector('#responsefield');
    const nextBtn = document.querySelector('#next');
    const cancelBtn = document.querySelector('#cancel');
    const submitPage = document.querySelector('#submitpage');
    const submitBtn = document.querySelector('#submit');
    // let response = document.querySelector('#response');
    

    let npc1Initial = true;
    if (keyPresses.Enter && positionX > 440 && positionX < 569) {
      dialogueContainer1.className = 'showing';
      dialogueContainer2.className = 'hidden'; 
      tutorial2.className = 'hidden'; 
      buttons1.className = 'showing'
      npc1Initial = false;

      const TYPEWRITER1 = new Typewriter(text1, {
      loop: false,
      delay: 30,
      cursor: null,
      });

      TYPEWRITER1
      .typeString('Hello! ')
      .pauseFor(600)
      .typeString('Would you like to submit a response? ')
      .start();

      yesBtn1.addEventListener('click', function() {
        // text1.innerHTML = ''
        buttons1.className = 'hidden'
        responseField.className = 'showing'

        TYPEWRITER1
        .deleteAll()
        .typeString('Great! ')
        .pauseFor(600)
        .typeString('Please answer this question: ')
        .pauseFor(600)
        .typeString('What is love to you?')
        .start();
      })

      noBtn1.addEventListener('click', function() {
        dialogueContainer1.className = 'hidden';
      })

      cancel.addEventListener('click', function() {
        dialogueContainer1.className = 'hidden';
        responseField.className = 'hidden';
      })

      nextBtn.addEventListener('click', function () {
        if(response.value !='') {
          TYPEWRITER1
          .deleteAll()
          .typeString('Sign your name here or leave the field empty to remain anonymous.')
          .start();
          responseField.className = 'hidden';
          submitPage.className = 'showing';
        } else {
          response.placeholder = 'Type something!';
          response.style.borderColor = 'red';
        }
      })

      submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        submitResponse();
      })  

      async function submitResponse() {
        const newResponse = {};
  
        if(newResponse.responses !='') {
          const newResponseData = new Parse.Object('Responses');
          newResponseData.set ('responses', newResponse.response);
          newResponseData.set ('sign', newResponse.sign)
          if(newResponse.sign =='') {
            newResponse.sign = 'Anonymous'
          }
          try {
            const result = await newResponseData.save();
            console.log('response created', result);
            resetFormFields();
            submitPage.className = 'hidden';
            TYPEWRITER1
            .deleteAll()
            .typeString('Your response has been recorded. :) ')
            .start();
            // responseSuccess.className = 'showing';
          } catch (error) {
            console.error('Error while creating response: ', error)
          }
        } 
      }

      function resetFormFields() {
        response.value = '';
        sign.value = '';
      }
    } 

    // (async () => {
    //   const Responses = Parse.Object.extend('Responses');
    //   const query = new Parse.Query(Responses);
    //   try {
    //       const results = await query.find();
    //       for (const object of results) {
    //           const response = object.get('response')
    //           const sign = object.get('sign')
    //           console.log(response);
    //           console.log(sign);
    //       }
    //   } catch(error) {
    //       console.error('Error while fetching Responses', error);
    //   }
    // })

    if (keyPresses.Enter && positionX > 570 && positionX < 699) {
      dialogueContainer2.className = 'showing';
      dialogueContainer1.className = 'hidden';
      tutorial2.className = 'hidden'; 

      const TYPEWRITER2 = new Typewriter(text2, {
        loop: false,
        delay: 30,
        cursor: null,
        });
  
        TYPEWRITER2
        .typeString('Hi! ')
        .pauseFor(600)
        .typeString("Would you like to view other people's responses? ")
        .start();

        noBtn2.addEventListener('click', function() {
          dialogueContainer2.className = 'hidden';
        })

        yesBtn2.addEventListener('click', function() {
          // displayResponses();
        })
    }
    if (keyPresses.Enter && positionX > 920 && positionX < 1049) {
      dialogueContainer3.className = 'showing'; 
      tutorial2.className = 'hidden'; 
    }
    if (keyPresses.Enter && positionX > 1050 && positionX < 1179) {
      dialogueContainer3.className = 'showing'; 
      tutorial2.className = 'hidden'; 
    }
    
  }

  

  // CHARACTER MOVEMENT
  const scale = 1; // **make sure to adjust canvas height in html too
  const width = 140; // width of each frame in spritesheet
  const height = 140; // height of each frame in spritesheet
  const scaled_width = scale * width;
  const scaled_height = scale * height;
  const cycle_loop = [0, 1]; // order in which frames are looped
  const facing_right = 0;
  const facing_left = 1;
  const frame_limit = 5; // speed at which frames cycle
  const movement_speed = 10; // speed at which character walks
  const tutorial = document.querySelector('#tutorial');
  const tutorial2 = document.querySelector('#tutorial2');

  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let keyPresses = {};
  let currentDirection = facing_right;
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
                  frameX * width, frameY * height, width, height,
                  canvasX, canvasY, scaled_width, scaled_height);
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
      // npc3.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc3.style.filter = '';
    }
    if (positionX > 1050 && positionX < 1179) {
      // npc4.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc4.style.filter = '';
    }
    // enter prompt appears but prevents from appearing again when character moves
    if (positionX > 440 && first) {
      tutorial2.className = 'slidein';
      first = false;
    }
  }

  function moveCharacter(deltaX, direction) {
    // prevents character from going off screen
    if (positionX + deltaX > 0 && positionX + scaled_width + deltaX < canvas.width) {
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
      moveCharacter(-movement_speed, facing_left);
      hasMoved = true;
    } else if (keyPresses.d || keyPresses.D || keyPresses.ArrowRight) {
      moveCharacter(movement_speed, facing_right);
      hasMoved = true;
      // movement prompt disappears when character first moves
      tutorial.style.display = 'none';
    }

    // animates character when it moves
    if (hasMoved) {
      frameCount++;
      if (frameCount >= frame_limit) {
        frameCount = 0;
        currentLoopIndex++;
        if (currentLoopIndex >= cycle_loop.length) {
          currentLoopIndex = 0;
        }
      }
    }

    // resets character to default stance when character stops moving
    if (!hasMoved) {
      currentLoopIndex = 0;
    }

    drawFrame(cycle_loop[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
    textBubble();
  }

})();