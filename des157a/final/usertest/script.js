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
    let turnPrompt = document.getElementById('turnPrompt');
    let dice = document.getElementById('dice');
    let rollResult = document.getElementById('rollResult');
    let p1score = document.getElementById('p1score');
    let p2score = document.getElementById('p2score');
    let giftPass = document.getElementById('giftPass');
    let footer = document.getElementsByTagName('footer');
    let closeBtn1 = document.getElementById('closeBtn1');
    let closeBtn2 = document.getElementById('closeBtn2');
    let usertestCloseBtn = document.getElementById('usertestCloseBtn');

    let gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        villagers: ['sherb', 'shino', "O'Hare", 'joey', 'bob', 'cousteau', 'cookie', 'stitches', 'broccolo', 'zucker'],
        villagerIndex: 0,
        players: null,
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        roll3: 0,
        roll4: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 4
    };

    // user test close button
    usertestCloseBtn.addEventListener('click', function() {
        document.getElementById('gray').className = "hidden";
        document.getElementById('usertest').className = "hidden";
    })


    //homepage continue button
    continueBtn.addEventListener('click', function() {
        document.getElementById('homepage').className = "hidden"
        document.getElementById('rulespage').className = "fadein" 
        gameData.players = [`${player1name.value}`, `${player2name.value}`]
        emptyUser();
        isabelleGreeting.innerHTML = `Hello <b>${player1name.value}</b> and <b>${player2name.value}</b>!<br>Welcome to <b>Gift a Villager</b>!<br>I’m Isabelle, and I’ll be explaining the rules to you!`
        footer[0].className = "hidden";
    })

    //rulespage start button
    startBtn.addEventListener('click', function() {
        document.getElementById('rulespage').className = "hidden"
        document.getElementById('gamepage').className = "fadein"
        footer[0].className = "showing";
        turnPrompt.style.paddingTop = "2%"; 
        gameData.index = Math.round(Math.random());

        //setup random villager start
        gameData.villagerIndex = Math.floor(Math.random() * 10);

        setUpTurn();
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

    //x button to close rules
    closeBtn1.addEventListener('click', function() {
        document.getElementById('rulesoverlay').className = "hidden";
        footer[0].className = "showing";
    })

    //x button to close settings
    // closeBtn2.addEventListener('click', function() {
    //     document.getElementById('settingsoverlay').className = "hidden";
    //     footer[0].className = "showing";
    // })

    //esc key to close
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
        // dice.innerHTML = '';
        // rollResult.innerHTML = '';

        dice.innerHTML = `<img src="images/1die.png"> <img src="images/1die.png"> <br> <img src="images/1die.png"> <img src="images/1die.png">`;

        giftPass.innerHTML = '<button id="rollBtn">Roll the Dice</button>';
        
        document.getElementById('rollBtn').addEventListener('click', function() {

            throwDice();

            //if last villager in cycle is reached, go back to first
            //otherwise, continue cycle through list of villagers
            if (gameData.villagerIndex > 8) {
                gameData.villagerIndex = 0;
            } else {
                gameData.villagerIndex = gameData.villagerIndex + 1;
            }
        });
    }

    function throwDice() {
        giftPass.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.roll3 = Math.floor(Math.random() * 6) + 1;
        gameData.roll4 = Math.floor(Math.random() * 6) + 1;
        dice.innerHTML = `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">
        <br>
        <img src="images/${gameData.dice[gameData.roll3-1]}"> <img src="images/${gameData.dice[gameData.roll4-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2 + gameData.roll3 + gameData.roll4;
        turnPrompt.style.paddingTop = "0";

        //if 5 or less is rolled...
        if (gameData.rollSum < 6) {
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>Oh no! You lost all your friends!</p>`;
            setTimeout(setUpTurn, 0);
        }

        //if 6-11 is rolled...
        else if (gameData.rollSum > 5 && gameData.rollSum < 12) {
            gameData.score[gameData.index] = gameData.score[gameData.index] - 1;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>You lost a friend :(</p>`;
            setTimeout(setUpTurn, 0);
        }

        //if 12-13 is rolled...
        else if (gameData.rollSum > 11 && gameData.rollSum < 14) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>Nothing happened.</p>`;
            setTimeout(setUpTurn, 0);
        }

        //if 14 or more is rolled...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + 1;

            rollResult.innerHTML = `<p>Yay! You gained a friend!`;

            giftPass.innerHTML = '<button id="giftBtn">Gift</button> <button id="passBtn">Pass</button';

            document.getElementById('giftBtn').addEventListener('click', function () {
                setUpTurn();
            });

            document.getElementById('passBtn').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h3 id="winMessage">${gameData.players[gameData.index]} wins!</h3>`;

            giftPass.innerHTML = '<button id="newGameBtn">Start a New Game?</button>';

            document.getElementById('newGameBtn').addEventListener('click', function () {
                location.reload();
            });

        } else {
            showCurrentScore();
        }
    }
    
    function showCurrentScore() {
        p1score.innerHTML = `${player1name.value}<br>Friends: ${gameData.score[0]}`;
        p2score.innerHTML = `${player2name.value}<br>Friends: ${gameData.score[1]}`;
    }

}());