(function(){
  'use strict';
  console.log('loading js');

  Parse.initialize('x3kjJoazxO1qh4Jxsrvd6OciU1cG1Xf98l8la2aT','acqlo6WFXsQHH3ezFWoDqYK82Tg4hrstcghrt5U4'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = 'https://parseapi.back4app.com/'
  
  const resizePrompt = document.querySelector('#resizeprompt');
  const dialogueContainer1 = document.querySelector('#dialoguecontainer1');
  const dialogueContainer2 = document.querySelector('#dialoguecontainer2');
  const text1a = document.querySelector('#text1a');
  const text1b = document.querySelector('#text1b');
  const text1c = document.querySelector('#text1c');
  const text1d = document.querySelector('#text1d');
  const text1e = document.querySelector('#text1e');
  const text1f = document.querySelector('#text1f');
  const text2a = document.querySelector('#text2a');
  const text2b = document.querySelector('#text2b');
  const text3 = document.querySelector('#text3');
  const text4 = document.querySelector('#text4');
  const buttons1 = document.querySelector('#buttons1');
  const buttons2 = document.querySelector('#buttons2');
  const yesBtn1 = document.querySelector('#yes1');
  const noBtn1 = document.querySelector('#no1');
  const yesBtn2 = document.querySelector('#yes2');
  const noBtn2 = document.querySelector('#no2');
  const ok = document.querySelector('#ok');
  const okBtn = document.querySelector('#okbtn');
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
    if (keyPresses.Enter && positionX < 100) {
      resizePrompt.className = 'hidden';
      backgroundFog.className = 'hidden';
    }
    if (keyPresses.Enter && positionX > 690 && positionX < 920 && dialogueContainer1.className != 'showing' && responseSubmitted == false) {
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
      text1e.className = 'hidden';
      text1f.className = 'hidden';

      const TYPEWRITER1A = new Typewriter(text1a, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER1A
      .typeString('Hello! ')
      .pauseFor(600)
      .typeString('Would you like to submit a response to our library? ')
      .start();
    } 
    if (keyPresses.Enter && positionX > 690 && positionX < 920 && dialogueContainer1.className != 'showing' && responseSubmitted == true) {
      dialogueContainer1.className = 'showing';
      closeWindow.className = 'showing';
    }
    if (keyPresses.Enter && positionX > 1020 && positionX < 1220 && dialogueContainer2.className != 'showing') {
      dialogueContainer2.className = 'showing';
      dialogueContainer1.className = 'hidden';
      tutorial2.className = 'hidden'; 
      text2a.className = 'showing';
      buttons2.className = 'showing';
      text2b.className = 'hidden';
      const TYPEWRITER2A = new Typewriter(text2a, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER2A
      .typeString('Hi! ')
      .pauseFor(600)
      .typeString("Would you like to view other people's responses? ")
      .start();
    }
    // if (keyPresses.Enter && positionX > 920 && positionX < 1049) {
    //   dialogueContainer3.className = 'showing'; 
    //   tutorial2.className = 'hidden'; 
    // }
    // if (keyPresses.Enter && positionX > 1050 && positionX < 1179) {
    //   dialogueContainer4.className = 'showing'; 
    //   tutorial2.className = 'hidden'; 
    // }
    if (keyPresses.Escape) {
      dialogueContainer1.className = 'hidden';
      dialogueContainer2.className = 'hidden';
      backgroundFog.className = 'hidden';
      responseLibrary.className = 'hidden';
    }
  }


////////// NPC1 DATA COLLECTION //////////
  yesBtn1.addEventListener('click', function() {
    tutorial3.className = 'hidden'; 
    text1a.className = 'hidden'
    text1b.className = 'showing'
    buttons1.className = 'hidden'
    ok.className = 'showing'
    const TYPEWRITER1B = new Typewriter(text1b, {
      loop: false,
      delay: 30,
      cursor: null,
    });
    TYPEWRITER1B
    .typeString('Great! ')
    .pauseFor(600)
    .typeString('Before we continue, ')
    .pauseFor(300)
    .typeString('please keep in mind to try to be as sincere as possible.')
    .start();
  })

  okBtn.addEventListener('click', function() {
    text1b.className = 'hidden'
    text1c.className = 'showing'
    ok.className = 'hidden'
    responseField.className = 'showing'
    const TYPEWRITER1C = new Typewriter(text1c, {
      loop: false,
      delay: 30,
      cursor: null,
    });
    TYPEWRITER1C
    .typeString('Now please answer this question: ')
    .pauseFor(300)
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
    if (response.value =='') {
      response.placeholder = 'Type something!';
      response.style.borderColor = 'red';
    } else {
      text1c.className = 'hidden'
      text1d.className = 'showing'
      const TYPEWRITER1D = new Typewriter(text1d, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER1D
      .typeString("Sign your initials or anything you'd like.")
      .start();
      responseField.className = 'hidden';
      submitPage.className = 'showing';
    }
  })

  let responseSubmitted = false
  submitBtn.addEventListener('click', function(event) {
    // event.preventDefault();
    if (sign.value =='') {
      sign.placeholder = 'Sign something!';
      sign.style.borderColor = 'red';
    } else {
      text1d.className = 'hidden';
      text1e.className = 'showing';
      submitPage.className = 'hidden';
      const TYPEWRITER1E = new Typewriter(text1e, {
        loop: false,
        delay: 30,
        cursor: null,
      });
      TYPEWRITER1E
      .typeString('. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .')
      .start();
      submitResponse();
      responseSubmitted = true;
    }
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
    if (newResponse.sign != '') {
      const newResponseData = new Parse.Object('Responses');
      newResponseData.set('response', newResponse.response);
      newResponseData.set('sign', newResponse.sign);
      try {
        const result = await newResponseData.save();
        // console.log('response created', result);
        resetFormFields();
        text1e.className = 'hidden';
        text1f.className = 'showing';
        closeWindow.className = 'showing';
        const TYPEWRITER1F = new Typewriter(text1f, {
          loop: false,
          delay: 30,
          cursor: null,
        });
        TYPEWRITER1F
        .typeString('Your response has been recorded!')
        .start();
      } catch (error) {
        console.error('Error while creating response: ', error)
      }
    } 
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
    text2a.className = 'hidden';
    buttons2.className = 'hidden';
    text2b.className = 'showing';
    const TYPEWRITER2B = new Typewriter(text2b, {
      loop: false,
      delay: 30,
      cursor: null,
    });
    TYPEWRITER2B
    .typeString('. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .')
    .start();
    displayResponses(); 
  })

  closelibraryBtn.addEventListener('click', function() {
    responseLibrary.className = 'hidden';
    backgroundFog.className = 'hidden';
  })

  let displayResponsesOnce = true;
  async function displayResponses() {
    const responses = Parse.Object.extend('Responses');
    const query = new Parse.Query(responses);
    const results = await query.descending('createdAt').find();
    // prevent responses from appending more than once and allows for text2b loading dots to appear while loading
    if (displayResponsesOnce == true) {
      results.forEach(function(eachResponse) {
        displayResponsesOnce = false;
        dialogueContainer2.className = 'hidden';
        responseLibrary.className = 'showing';
        backgroundFog.className = 'showing';
        const id = eachResponse.id;
        const response = eachResponse.get('response');
        const sign = eachResponse.get('sign');
        const responseItem = document.createElement('div');
        responseItem.setAttribute('id', `r-${id}`);
        responseItem.className = 'grid-item';
        responseItem.innerHTML = `<p>${response}</p> <p id="signature">—${sign}</p>`;
        masonryLayout.append(responseItem);
      })
    }
    // allows user to bring up response library immediately after the initial load
    if (displayResponsesOnce == false) {
      dialogueContainer2.className = 'hidden';
      responseLibrary.className = 'showing';
      backgroundFog.className = 'showing';
    }
    const masonry = await new Masonry(masonryLayout, {
      itemSelector: '.grid-item',
      gutter: 5,
      columnWidth: 43,
    });
  }

  




////////// CHARACTER MOVEMENT //////////
  const scale = 1; // **make sure to adjust canvas height in html too
  const width = 112; // width of each frame in spritesheet
  const height = 112; // height of each frame in spritesheet
  const scaled_width = scale * width;
  const scaled_height = scale * height;
  const cycle_loop = [0, 1]; // order in which frames are looped
  const facing_right = 0;
  const facing_left = 1;
  const frame_limit = 5; // speed at which frames cycle
  const movement_speed = 5; // speed at which character walks
  const tutorial = document.querySelector('#tutorial');
  const tutorial2 = document.querySelector('#tutorial2');
  const tutorial3 = document.querySelector('#tutorial3');
  const p1 = document.querySelector('#p1');
  const p2 = document.querySelector('#p2');
  const viewportWidth = window.innerWidth;

  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let keyPresses = {};
  let currentDirection = facing_right;
  let currentLoopIndex = 0;
  let frameCount = 0;
  let positionX = 0;
  let positionY = 0;
  let img = new Image();

  //character selection
  p1.addEventListener('click', function() {
    loadImage1();
    resizePrompt.className = 'hidden';
    backgroundFog.className = 'hidden';
  })
  
  p2.addEventListener('click', function() {
    loadImage2();
    resizePrompt.className = 'hidden';
    backgroundFog.className = 'hidden';
  })

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
  function loadImage1() {
    img.src = 'images/player0.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
  }

  function loadImage2() {
    img.src = 'images/player1.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
  }

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
    if (positionX > 690 && positionX < 920) {
      npc1.style.filter = 'drop-shadow(0 0 10px yellow)';
    } else {
      npc1.style.filter = '';
    }
    if (positionX > 1020 && positionX < 1220) {
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
    if (positionX > 690 && first) {
      tutorial2.className = 'slidein';
      first = false;
    }
  }

  function moveCharacter(deltaX, direction) {
    // allows character to move without going off screen
    if (positionX + deltaX > 0 && positionX + scaled_width + deltaX < viewportWidth) {
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
    // outer if statement prevents character from moving when dialogue is open
    if (dialogueContainer1.className == 'hidden' && dialogueContainer2.className == 'hidden' && responseLibrary.className == 'hidden' && resizePrompt.className == 'hidden') {
      if (keyPresses.a || keyPresses.A || keyPresses.ArrowLeft) {
        moveCharacter(-movement_speed, facing_left);
        hasMoved = true;
      } else if (keyPresses.d || keyPresses.D || keyPresses.ArrowRight) {
        moveCharacter(movement_speed, facing_right);
        hasMoved = true;
        // movement prompt disappears when character first moves
        tutorial.style.display = 'none';
      }
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