(function(){
  'use strict';
  console.log('loading js');

  Parse.initialize('x3kjJoazxO1qh4Jxsrvd6OciU1cG1Xf98l8la2aT','acqlo6WFXsQHH3ezFWoDqYK82Tg4hrstcghrt5U4'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/'
  
  const dialogueContainer1 = document.querySelector('#dialoguecontainer1');
  const dialogueContainer2 = document.querySelector('#dialoguecontainer2');
  const text1a = document.querySelector('#text1a');
  const text1b = document.querySelector('#text1b');
  const text1c = document.querySelector('#text1c');
  const text1d = document.querySelector('#text1d');
  const text2 = document.querySelector('#text2');
  const text3 = document.querySelector('#text3');
  const text4 = document.querySelector('#text4');
  const buttons1 = document.querySelector('#buttons1');
  const yesBtn1 = document.querySelector('#yes1');
  const noBtn1 = document.querySelector('#no1');
  const yesBtn2 = document.querySelector('#yes2');
  const noBtn2 = document.querySelector('#no2');
  const responseField = document.querySelector('#responsefield');
  const nextBtn = document.querySelector('#next');
  const cancelBtn = document.querySelector('#cancel');
  const submitPage = document.querySelector('#submitpage');
  const submitBtn = document.querySelector('#submit');
  const closeWindow = document.querySelector('#submitted');
  const closeBtn = document.querySelector('#close');
  const inputs = document.querySelectorAll('#dialoguecontainer1 input:not([type=submit])');
  const backgroundFog = document.querySelector('#backgroundfog');
  const responseLibrary = document.querySelector('#responselibrary');
  const masonryLayout = document.querySelector('#masonrylayout');
  const closelibraryBtn = document.querySelector('#closelibrary');

////////// DIALOGUE //////////
  function textBubble() {
    // let npc1Initial = true;
    if (keyPresses.Enter && positionX > 440 && positionX < 569) {
      tutorial2.className = 'hidden'; 
      tutorial3.className = 'showing'; 
      dialogueContainer1.className = 'showing';
      dialogueContainer2.className = 'hidden'; 
      responseField.className = 'hidden';
      submitPage.className = 'hidden';
      closeWindow.className = 'hidden'
      buttons1.className = 'showing';
      text1a.className = 'showing';
      text1b.className = 'hidden';
      text1c.className = 'hidden';
      text1d.className = 'hidden';
      // npc1Initial = false;
      const TYPEWRITER1A = new Typewriter(text1a, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER1A
      .typeString('Hello! ')
      .pauseFor(600)
      .typeString('Would you like to submit a response? ')
      .start();
    } 

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
    }
    if (keyPresses.Enter && positionX > 920 && positionX < 1049) {
      dialogueContainer3.className = 'showing'; 
      tutorial2.className = 'hidden'; 
    }
    if (keyPresses.Enter && positionX > 1050 && positionX < 1179) {
      dialogueContainer4.className = 'showing'; 
      tutorial2.className = 'hidden'; 
    }
    
  }


////////// NPC1 DATA COLLECTION //////////
  yesBtn1.addEventListener('click', function() {
    tutorial3.className = 'hidden'; 
    text1a.className = 'hidden'
    text1b.className = 'showing'
    buttons1.className = 'hidden'
    responseField.className = 'showing'
    const TYPEWRITER1B = new Typewriter(text1b, {
      loop: false,
      delay: 30,
      cursor: null,
    });
    TYPEWRITER1B
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

  cancelBtn.addEventListener('click', function() {
    dialogueContainer1.className = 'hidden';
    responseField.className = 'hidden';
  })

  nextBtn.addEventListener('click', function () {
    if(response.value !='') {
      text1b.className = 'hidden'
      text1c.className = 'showing'
      const TYPEWRITER1C = new Typewriter(text1c, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER1C
      // .typeString('Sign your name or leave the field empty to remain anonymous.')
      .typeString('Sign your initials.')
      .start();
      responseField.className = 'hidden';
      submitPage.className = 'showing';
    } else {
      response.placeholder = 'Type something!';
      response.style.borderColor = 'red';
    }
  })

  submitBtn.addEventListener('click', function(event) {
    // event.preventDefault();
    submitResponse();
  })

  closeBtn.addEventListener('click', function() {
    dialogueContainer1.className = 'hidden';
    closeWindow.className = 'hidden'
  })
  
  async function submitResponse() {
    const newResponse = {};

    for (let i=0; i<inputs.length; i++) {
      let key = inputs[i].getAttribute('name');
      let value = inputs[i].value;
      newResponse[key] = value;
    }

    if(newResponse.response != '') {
      const newResponseData = new Parse.Object('Responses');
      newResponseData.set('response', newResponse.response);
      newResponseData.set('sign', newResponse.sign);
      try {
        if(newResponse.sign == '') {
          sign.value = 'Anonymous'
          newResponse.sign = 'Anonymous'
        }
        const result = await newResponseData.save();
        // console.log('response created', result);
        resetFormFields();
        submitPage.className = 'hidden';
        text1c.className = 'hidden';
        text1d.className = 'showing';
        closeWindow.className = 'showing';
        const TYPEWRITER1D = new Typewriter(text1d, {
          loop: false,
          delay: 30,
          cursor: null,
        });
        TYPEWRITER1D
        .typeString('Your response has been recorded!')
        .start();
      } catch (error) {
        console.error('Error while creating response: ', error)
      }
    } 
    console.log(newResponse.sign);
  }

  function resetFormFields() {
    response.value = '';
    sign.value = '';
  }


////////// NPC2 RESPONSE LIBRARY //////////
  noBtn2.addEventListener('click', function() {
    dialogueContainer2.className = 'hidden';
  })

  yesBtn2.addEventListener('click', function() {
    dialogueContainer2.className = 'hidden';
    responseLibrary.className = 'showing';
    backgroundFog.className = 'showing';
    if (displayResponsesOnce == true) {
      displayResponses(); 
    }
  })

  closelibraryBtn.addEventListener('click', function() {
    responseLibrary.className = 'hidden';
    backgroundFog.className = 'hidden';
  })

  let displayResponsesOnce = true;
  async function displayResponses() {
    displayResponsesOnce = false;
    const responses = Parse.Object.extend('Responses');
    const query = new Parse.Query(responses);
    const results = await query.ascending('response').find();
    

    results.forEach(function(eachResponse) {
        const id = eachResponse.id;
        const response = eachResponse.get('response');
        const sign = eachResponse.get('sign');

        const responseItem = document.createElement('div');
        responseItem.setAttribute('id', `r-${id}`);
        responseItem.className = 'grid-item';
        responseItem.innerHTML = 
            `<p>${response}</p> <p id="signature">—${sign}</p>`;

        masonryLayout.append(responseItem);
        console.log(responseItem);
    })

    const masonry = await new Masonry(masonryLayout, {
      itemSelector: '.grid-item',
      gutter: 5,
      columnWidth: 43,
    });
  }

  




////////// CHARACTER MOVEMENT //////////
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
  const tutorial3 = document.querySelector('#tutorial3');

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
    // if (positionX > 920 && positionX < 1049) {
    //   // npc3.style.filter = 'drop-shadow(0 0 10px yellow)';
    // } else {
    //   npc3.style.filter = '';
    // }
    // if (positionX > 1050 && positionX < 1179) {
    //   // npc4.style.filter = 'drop-shadow(0 0 10px yellow)';
    // } else {
    //   npc4.style.filter = '';
    // }
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