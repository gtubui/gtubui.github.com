(function(){
    'use strict';
    console.log('reading js');

    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const madlib1 = document.querySelector('#madlib1');
    const madlib2 = document.querySelector('#madlib2');
    const madlib3 = document.querySelector('#madlib3');
    const userName = document.querySelector('#userName').value;
    const hairShort = document.querySelector('#hair-short');
    const hairLong = document.querySelector('#hair-long');
    const companionName = document.querySelector('#companionName').value;
    const companionDog = document.querySelector('#companion-dog');
    const companionCat = document.querySelector('#companion-cat');
    const companionFrog = document.querySelector('#companion-frog');
    const companionBlob = document.querySelector('#companion-blob');
    const weaponSword = document.querySelector('#weapon-sword');
    const weaponSpear = document.querySelector('#weapon-spear');
    const weaponBow = document.querySelector('#weapon-bow');
    const hatChef = document.querySelector('#hat-chef');
    const hatCowboy = document.querySelector('#hat-cowboy');
    const hatChicken = document.querySelector('#hat-chicken');
    const treatChocolate = document.querySelector('#treat-chocolate');
    const treatCake = document.querySelector('#treat-cake');
    const treatLollipop = document.querySelector('#treat-lollipop');
    const treatIceCream = document.querySelector('#treat-icecream');

    document.querySelector('#nextBtnForm').addEventListener('click', function() {
        form1.className = 'hidden';
        form2.className = 'showing';
    });

    document.querySelector('#prevBtnForm').addEventListener('click', function() {
        form1.className = 'showing';
        form2.className = 'hidden';
    });

    document.querySelector('#submitBtn').addEventListener('click', function() {
        form2.className = 'hidden';
        madlib1.className = 'showing';
    });

    document.querySelector('#nextBtn1').addEventListener('click', function() {
        madlib1.className = 'hidden';
        madlib2.className = 'showing';
    });

    document.querySelector('#prevBtn1').addEventListener('click', function() {
        madlib1.className = 'showing';
        madlib2.className = 'hidden';
    });

    document.querySelector('#nextBtn2').addEventListener('click', function() {
        madlib2.className = 'hidden';
        madlib3.className = 'showing';
    });

    document.querySelector('#prevBtn2').addEventListener('click', function() {
        madlib2.className = 'showing';
        madlib3.className = 'hidden';
    });

    let selectedWeapon;
            if (weaponSword.checked) {
                selectedWeapon = 'sword';
            }
            if (weaponSpear.checked) {
                selectedWeapon = 'spear';
            }
            if (weaponBow.checked) {
                selectedWeapon = 'bow';
            }
        
        
        document.querySelector('#madlib1P').innerHTML = `You head off on your journey down a road beside a lake, with your lil’ buddy ${companionName}. On your left, the sun has just begun to rise and the lake sparkles. What a sight! On your right, there is a dense forest of trees. As you travel along the road, you become deep in thought about the possibilities that could come in your new adventure. Suddenly, a monster jumps out of the forest and attacks you! Nearby, you see some weapons laying on the ground. You call out to ${companionName} to bring you the ${selectedWeapon}. With the help of ${companionName} and your newfound ${selectedWeapon}, you are able to slay the monster!`

        let selectedHat;
            if (hatChef.checked) {
                selectedHat = 'chef hat';
            }
            if (hatCowboy.checked) {
                selectedHat = 'cowboy hat';
            }
            if (hatChicken.checked) {
                selectedHat = 'chicken';
            }
        
        
        document.querySelector('#madlib2P').innerHTML = `You continue your journey down the road, and soon spot a city in the distance. Upon reaching the city, your eyes are drawn to a shop window’s display of hats. You love hats, and before you know it, you find yourself inside the shop. Time passes by quickly as you get lost in the wide array of hats available, but finally you decide to purchase ${selectedHat}s for you and ${companionName}. Lookin’ stylish!`

        let selectedTreat;
            if (treatChocolate.checked) {
                selectedTreat = 'chocolate bars';
            }
            if (treatCake.checked) {
                selectedTreat = 'strawberry shortcake';
            }
            if (treatLollipop.checked) {
                selectedTreat = 'lollipops';
            }
            if (treatIceCream.checked) {
                selectedTreat = 'ice cream';
            }
        
        
        document.querySelector('#madlib3P').innerHTML = `When you head outside, the sun is setting and you hear ${companionName}’s stomach growl. It’s about time for a treat after a long and eventful day. You find a dessert shop nearby and you and ${companionName} scan the menu for the tastiest treat. You both decide to have ${selectedTreat}! Yummy! After finishing your dessert, you finally find an inn to spend the night and quickly fall asleep with ${companionName} by your side. Sweet dreams, ${userName}. Hopefully tomorrow is just as exciting~`


    

    // myForm.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     var name = document.querySelector('#userName').value;
    //     var companionName = document.querySelector('#companionName').value;
    //     var companionType = document.querySelector('#companionType').value;
    //     var weapon = document.querySelector('#weapon').value;
    //     var hat = document.querySelector('#hat').value;
    //     var dessert = document.querySelector('#dessert').value;

    //     var myText;
    //     if (name && companionName && companionType && weapon && hat && dessert) {
    //         myText = `Here are the words: ${name}, ${companionName}, ${companionType}, ${weapon}, ${hat} and ${dessert}`;
    //     } else {
    //         myText = 'Please complete the form!";
    //     }

    //     madlib.textContent = myText;

    //     var formData = document.querySelectorAll("input[type=text]");
    //     for (var eachField of formData) {
    //         eachField.value = "";
    //     }
    // });

    
}());