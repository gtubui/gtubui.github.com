(function() {
    'use strict';
    console.log('reading js');

    var main = document.getElementById('main');
    var start = document.getElementById('start');
    var startBtn = document.getElementById('startBtn');
    var dicePrompt = document.getElementById('dicePrompt');
    var dice = document.getElementById('dice');
    var rollResult = document.getElementById('rollResult');
    var p1score = document.getElementById('p1score');
    var p2score = document.getElementById('p2score');
    var giftPass = document.getElementById('giftPass');

    var gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        villagers: ['sherb.gif'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        roll3: 0,
        roll4: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 9
    };

    // console.log(gameData)

    // start game + end game
    startBtn.addEventListener('click', function() {
        gameData.index = Math.round(Math.random());
        start.className = "hidden"
        main.className = "showing";
        // gameData.villagers = Math.floor(Math.random() * 2) + 1;


        document.getElementById('newGame').addEventListener("click", function() {
            location.reload();
        });

        setUpTurn();
    })

    function setUpTurn() {
        dicePrompt.innerHTML = `<p><i>${gameData.players[gameData.index]}'s turn</i></p>`;
        dice.innerHTML = '';
        rollResult.innerHTML = '';
        giftPass.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        });
    }

    function throwDice() {
        giftPass.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.roll3 = Math.floor(Math.random() * 6) + 1;
        gameData.roll4 = Math.floor(Math.random() * 6) + 1;
        dice.innerHTML = `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}"><br><img src="images/${gameData.dice[gameData.roll3-1]}"> <img src="images/${gameData.dice[gameData.roll4-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2 + gameData.roll3 + gameData.roll4;

        //if 5 or less is rolled...
        if (gameData.rollSum < 6) {
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>Oh no! You lost all your friends! Switching to ${gameData.players[gameData.index]}...</p>`;
            setTimeout(setUpTurn, 1200);
        }

        //if 6-11 is rolled...
        else if (gameData.rollSum > 5 && gameData.rollSum < 12) {
            gameData.score[gameData.index] = gameData.score[gameData.index] - 1;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>You lost a friend :(<br> Switching to ${gameData.players[gameData.index]}...</p>`;
            setTimeout(setUpTurn, 1000);
        }

        //if 12-13 is rolled...
        else if (gameData.rollSum > 11 && gameData.rollSum < 14) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            rollResult.innerHTML = `<p>Nothing happened.<br> Switching to ${gameData.players[gameData.index]}...</p>`;
            setTimeout(setUpTurn, 1000);
        }

        //if 14 or more is rolled...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + 1;

            rollResult.innerHTML = `<p>Yay! You gained a friend!`;

            giftPass.innerHTML = '<button id="gift">Gift</button> <button id="pass">Pass</button';

            document.getElementById('gift').addEventListener('click', function () {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins!</h2>`;

            giftPass.innerHTML = '';

        } else {
            showCurrentScore();
        }
    }
    
    function showCurrentScore() {
        p1score.innerHTML = `Friends: ${gameData.score[0]}`;
        p2score.innerHTML = `Friends: ${gameData.score[1]}`;
    }


}());