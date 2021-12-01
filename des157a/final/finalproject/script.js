(function() {
    'use strict';
    console.log('reading js'); 

    let player1name = document.getElementById('player1name');
    let player2name = document.getElementById('player2name');
    let continueBtn = document.getElementById('continueBtn');
    let isabelleGreeting = document.getElementById('isabellegreeting');
    let startBtn = document.getElementById('startBtn');
    let rulesBtn = document.getElementById('rulesBtn');
    let settingsBtn = document.getElementById('settingsBtn');
    let villager = document.getElementById('villager')
    let p1score = document.getElementById('p1score');
    let p2score = document.getElementById('p2score');
    let turnPrompt = document.getElementById('turnPrompt');
    let dice = document.getElementById('dice');
    let rollResult = document.getElementById('rollResult');
    let gift = document.getElementById('gift');
    let footer = document.getElementsByTagName('footer');
    let closeBtn1 = document.getElementById('closeBtn1');
    let closeBtn2 = document.getElementById('closeBtn2');
    const bubblegum = document.getElementById('bubblegum');
    const bubblegumAudio = new Audio('sounds/bubblegum.mp3');
    const cruisin = document.getElementById('cruisin');
    const cruisinAudio = new Audio('sounds/cruisin.mp3');
    const menuselectAudio = new Audio('sounds/menuselect.mp3');
    const startAudio = new Audio('sounds/start.ogg');

    let gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        villagers: ['sherb', 'shino', "O'Hare", 'joey', 'bob', 'cousteau', 'cookie', 'stitches', 'broccolo', 'zucker', 'marshal', 'apple'],
        villagerIndex: 0,
        players: null,
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        roll3: 0,
        roll4: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 6
    };

    //audio play for music choices
    bubblegum.addEventListener('click', function () {
        menuselectAudio.play();
    })

    cruisin.addEventListener('click', function() {
        menuselectAudio.play();
    })

    //homepage continue button
    continueBtn.addEventListener('click', function() {
        menuselectAudio.play();
        document.getElementById('homepage').className = "hidden"
        document.getElementById('rulespage').className = "fadein" 
        gameData.players = [`${player1name.value}`, `${player2name.value}`]
        emptyUser();
        isabelleGreeting.innerHTML = `Hello <b>${player1name.value}</b> and <b>${player2name.value}</b>!<br>Welcome to <b>Gift a Villager</b>!<br>I’m Isabelle, and I’ll be explaining the rules to you!`
        footer[0].className = "hidden";
    })

    //rulespage start button
    startBtn.addEventListener('click', function() {
        startAudio.play();
        document.getElementById('rulespage').className = "hidden"
        document.getElementById('gamepage').className = "fadein"
        footer[0].className = "showing";
        gameData.index = Math.round(Math.random());
        rollResult.innerHTML = `${gameData.players[gameData.index]} starts the game!`

        //setup random villager start
        gameData.villagerIndex = Math.floor(Math.random() * 10);

        //background music
        if (bubblegum.checked) {
            bubblegumAudio.play();
        } else {
            cruisinAudio.play();
        }

        //dice images start on 1die rolls
        dice.innerHTML = `<img src="images/1die.png"> <img src="images/1die.png"> <br> <img src="images/1die.png"> <img src="images/1die.png">`;

        p1score.innerHTML = `<img class="playericonIG" src="images/player1smol.gif" alt="player 1 icon">
        <h4 class="friends">${player1name.value}'s
        friends: ${gameData.score[0]}</h4>`;

        p2score.innerHTML = `<img class="playericonIG" src="images/player2smol.gif" alt="player 2 icon">
        <h4 class="friends">${player2name.value}'s
        friends: ${gameData.score[1]}</h4>`;

        setUpTurn();
    })

    //repeat background music when it reaches the end
    bubblegumAudio.addEventListener('ended', function() {
        bubblegumAudio.currentTime = 0;
        bubblegumAudio.play();
    })

    cruisinAudio.addEventListener('ended', function() {
        cruisinAudio.currentTime = 0;
        cruisinAudio.play();
    })
    
    //info button for rules
    rulesBtn.addEventListener('click', function() {
        document.getElementById('rulesoverlay').className = "fadein";
        footer[0].className = "hidden";
        closeBtn1.className = "showing";
        document.getElementById('tomnookgreeting').innerHTML = "What? Didn't Isabelle just explain the rules to you?<br>Well, here they are again.";
    })

    //cog button for settings
    // settingsBtn.addEventListener('click', function() {
    //     document.getElementById('settingsoverlay').className = "fadein";
    //     footer[0].className = "hidden";
    // })

    //x button to close rules overlay
    closeBtn1.addEventListener('click', function() {
        document.getElementById('rulesoverlay').className = "hidden";
        footer[0].className = "showing";
    })

    //x button to close settings overlay
    // document.getElementById('closeBtn2').addEventListener('click', function() {
    //     document.getElementById('settingsoverlay').className = "hidden";
    //     footer[0].className = "showing";
    // })

    //esc key to close overlay
    document.addEventListener('keydown', function(close) {
        if (close.key === 'Escape') {
            document.getElementById('rulesoverlay').className = "hidden";
            // document.getElementById('settingsoverlay').className = "hidden";
            footer[0].className = "showing";
        }
    }) 

    //if no name is entered, use default names
    function emptyUser() {
        if (player1name.value === "") {
            gameData.players[0] = "Timmy"
            player1name.value = "Timmy"
        }
        if (player2name.value === "") {
            gameData.players[1] = "Tommy"
            player2name.value = "Tommy"
        }
    }

    function setUpTurn() {
        villager.innerHTML = `<img src="images/${gameData.villagers[gameData.villagerIndex]}.gif" alt="${gameData.villagers}"></img>
        <h3 class="villagerName">${gameData.villagers[gameData.villagerIndex]}</h3>`
        
        turnPrompt.innerHTML = `<p><b>&gt;${gameData.players[gameData.index]}'s turn</b></p>`;

        gift.innerHTML = '<button id="giftBtn">Gift</button>';
        
        document.getElementById('giftBtn').addEventListener('click', function() {   
            throwDice();

            //if last villager in cycle is reached, go back to first
            //otherwise, continue cycle through list of villagers
            if (gameData.villagerIndex > 10) {
                gameData.villagerIndex = 0;
            } else {
                gameData.villagerIndex = gameData.villagerIndex + 1;
            }
        })        
    }

    function throwDice() {
        gift.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.roll3 = Math.floor(Math.random() * 6) + 1;
        gameData.roll4 = Math.floor(Math.random() * 6) + 1;
        dice.innerHTML = `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">
        <br>
        <img src="images/${gameData.dice[gameData.roll3-1]}"> <img src="images/${gameData.dice[gameData.roll4-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2 + gameData.roll3 + gameData.roll4;

        rollResult.style.padding = "0% 5% 0% 5%"

        //if 5 or less is rolled...
        if (gameData.rollSum < 6) {
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>${gameData.players[(gameData.index + 1) % 2]} rolled a ${gameData.rollSum}.<br>Oh no! ${gameData.players[(gameData.index + 1) % 2]} lost all their friends!</p>`;

            setUpTurn();
        }

        //if 6-11 is rolled... 
        else if (gameData.rollSum > 5 && gameData.rollSum < 12) {
            gameData.score[gameData.index] = gameData.score[gameData.index] - 1;
            
            // prevent score from going negative
            if (gameData.score[gameData.index] < 0) {
                gameData.score[gameData.index] = 0;
            }

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            
            showCurrentScore();

            rollResult.innerHTML = `<p>${gameData.players[(gameData.index + 1) % 2]} rolled a ${gameData.rollSum}.<br>${gameData.players[(gameData.index + 1) % 2]} lost a friend :(</p>`;

            setUpTurn();
        }

        //if 12-13 is rolled...
        else if (gameData.rollSum > 11 && gameData.rollSum < 14) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            
            showCurrentScore();

            rollResult.innerHTML = `<p>${gameData.players[(gameData.index + 1) % 2]} rolled a ${gameData.rollSum}.<br>Nothing happened.</p>`;

            setUpTurn();
        }

        //if 14 or more is rolled...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + 1;

            rollResult.innerHTML = `<p>${gameData.players[gameData.index]} rolled a ${gameData.rollSum}.<br>Yay! ${gameData.players[gameData.index]} gained a friend!`;

            setUpTurn();

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {

            document.getElementById('turnPrompt').style.animation = "none";

            showCurrentScore();

            winner.innerHTML = `<h3 id="winMessage">${gameData.players[gameData.index]} wins!</h3>`;

            gift.innerHTML = '<button id="newGameBtn">Start a New Game?</button>';

            document.getElementById('newGameBtn').addEventListener('click', function () {
                location.reload();
            });

        } else { 
            gift.innerHTML = '<button id="giftAgainBtn">Gift Again</button>';

            document.getElementById('giftAgainBtn').addEventListener('click', function() {   
                throwDice();
        
                //if last villager in cycle is reached, go back to first
                //otherwise, continue cycle through list of villagers
                if (gameData.villagerIndex > 10) {
                    gameData.villagerIndex = 0;
                } else {
                    gameData.villagerIndex = gameData.villagerIndex + 1;
                }
            })

            showCurrentScore();
        }
    }
    
    function showCurrentScore() {
        p1score.innerHTML = `<img class="playericonIG" src="images/player1smol.gif" alt="player 1 icon">
        <h4 class="friends">${player1name.value}'s
        friends: ${gameData.score[0]}</h4>`;

        p2score.innerHTML = `<img class="playericonIG" src="images/player2smol.gif" alt="player 2 icon">
        <h4 class="friends">${player2name.value}'s
        friends: ${gameData.score[1]}</h4>`;
    }

}());