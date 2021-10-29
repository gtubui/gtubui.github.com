(function() {
    'use strict';
    console.log('reading js');

    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const madlib1 = document.querySelector('#madlib1');
    const madlib2 = document.querySelector('#madlib2');
    const madlib3 = document.querySelector('#madlib3');
    let userName = document.querySelector('#userName');
    const hairShort = document.querySelector('#hair-short');
    const shorthair2 = document.querySelector('#shorthair2');
    const shorthair3 = document.querySelector('#shorthair3');
    const hairLong = document.querySelector('#hair-long');
    const longhair2 = document.querySelector('#longhair2');
    const longhair3 = document.querySelector('#longhair3');
    let companionName = document.querySelector('#companionName');
    const companionDog = document.querySelector('#companion-dog');
    const dog = document.querySelector('#dog');
    const dog2 = document.querySelector('#dog2');
    const companionCat = document.querySelector('#companion-cat');
    const cat = document.querySelector('#cat');
    const cat2 = document.querySelector('#cat2');
    const companionFrog = document.querySelector('#companion-frog');
    const frog = document.querySelector('#frog');
    const frog2 = document.querySelector('#frog2');
    const companionBlob = document.querySelector('#companion-blob');
    const blob = document.querySelector('#blob');
    const blob2 = document.querySelector('#blob2');
    const weaponSword = document.querySelector('#weapon-sword');
    const sword2 = document.querySelector('#sword2');
    const weaponSpear = document.querySelector('#weapon-spear');
    const spear2 = document.querySelector('#spear2');
    const weaponBow = document.querySelector('#weapon-bow');
    const bow2 = document.querySelector('#bow2');
    const hatChef = document.querySelector('#hat-chef');
    const chef = document.querySelector('#chef');
    const chef2 = document.querySelector('#chef2');
    const chef3 = document.querySelector('#chef3');
    const hatCowboy = document.querySelector('#hat-cowboy');
    const cowboy = document.querySelector('#cowboy');
    const cowboy2 = document.querySelector('#cowboy2');
    const cowboy3 = document.querySelector('#cowboy3');
    const cowboy4 = document.querySelector('#cowboy4');
    const hatChicken = document.querySelector('#hat-chicken');
    const chicken = document.querySelector('#chicken');
    const chicken2 = document.querySelector('#chicken2');
    const chicken3 = document.querySelector('#chicken3');
    const treatChocolate = document.querySelector('#treat-chocolate');
    const chocolate = document.querySelector('#chocolate');
    const treatCake = document.querySelector('#treat-cake');
    const cake = document.querySelector('#cake');
    const treatLollipop = document.querySelector('#treat-lollipop');
    const lollipop = document.querySelector('#lollipop');
    const treatIceCream = document.querySelector('#treat-icecream');
    const icecream = document.querySelector('#icecream');
    const goodnight = document.querySelector('#goodnight');

    //OUTPUT FONT SIZE 20PX
    document.querySelector('#madlib1P').style.fontSize = '20px';
    document.querySelector('#madlib2P').style.fontSize = '20px';
    document.querySelector('#madlib3P').style.fontSize = '20px';

    //OVERLAYS
    document.querySelector('#nextBtnForm').addEventListener('click', function() {
        form1.className = 'hidden';
        form2.className = 'showing';
    });

    document.querySelector('#prevBtnForm').addEventListener('click', function() {
        form1.className = 'showing';
        form2.className = 'hidden';
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

    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('submit button clicked');
        form2.className = 'hidden';
        madlib1.className = 'showing';

        // glenda says: get the values within the 'submit' function
        userName = document.querySelector('#userName').value;
        companionName = document.querySelector('#companionName').value;

        //TEXT
        let selectedWeapon;
        if (weaponSword.checked) {
            selectedWeapon = 'sword';
        }
        if (weaponSpear.checked) {
            selectedWeapon = 'spear';
            console.log('selectedWeapon');
        }

        if (weaponBow.checked) {
            selectedWeapon = 'bow';
        }

        document.querySelector('#madlib1P').innerHTML = `You head off on your journey down a road beside a lake, with your lil’ buddy <b>${companionName}</b>. On your left, the sun has just begun to rise and the lake sparkles. What a sight! On your right, there is a dense forest of trees. As you travel along the road, you become deep in thought about the possibilities that could come in your new adventure. Suddenly, a monster jumps out of the forest and attacks you! Nearby, you see some weapons laying on the ground. You call out to <b>${companionName}</b> to bring you the <b>${selectedWeapon}</b>. With the help of <b>${companionName}</b> and your newfound <b>${selectedWeapon}</b>, you are able to slay the monster!`

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

        document.querySelector('#madlib2P').innerHTML = `You continue your journey down the road, and soon spot a city in the distance. Upon reaching the city, your eyes are drawn to a shop window’s display of hats. You love hats, and before you know it, you find yourself inside the shop. Time passes by quickly as you get lost in the wide array of hats available, but finally you decide to purchase <b>${selectedHat}s</b> for you and <b>${companionName}</b>. Lookin’ stylish!`

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

        document.querySelector('#madlib3P').innerHTML = `When you head outside, the sun is setting and you hear <b>${companionName}'s</b> stomach growl. It’s about time for a treat after a long and eventful day. You find a dessert shop nearby and you and <b>${companionName}</b> scan the menu for the tastiest treat. You both decide to have <b>${selectedTreat}</b>! Yummy! After finishing your dessert, you finally find an inn to spend the night and quickly fall asleep with <b>${companionName}</b> by your side. Sweet dreams, <b>${userName}</b>. Hopefully tomorrow is just as exciting~`

        //IMAGES  
        if (hairShort.checked) {
            shorthair2.className = 'showing';
            shorthair3.className = 'showing';
        }

        if (hairLong.checked) {
            longhair2.className = 'showing';
            longhair3.className = 'showing';
        }

        if (companionDog.checked) {
            dog.className = 'showing';
            dog2.className = 'showing';
        }

        if (companionCat.checked) {
            cat.className = 'showing';
            cat2.className = 'showing';
        }

        if (companionFrog.checked) {
            frog.className = 'showing';
            frog2.className = 'showing';
        }

        if (companionBlob.checked) {
            blob.className = 'showing';
            blob2.className = 'showing';
        }

        if (weaponSword.checked) {
            sword2.className = 'showing';
        }

        if (weaponSpear.checked) {
            spear2.className = 'showing';
        }

        if (weaponBow.checked) {
            bow2.className = 'showing';
        }

        if (companionDog.checked && hatChef.checked) {
            chef.className = 'showing';
            chef2.className = 'showing';
        }

        if (companionCat.checked && hatChef.checked) {
            chef.className = 'showing';
            chef2.className = 'showing';
        }

        if (companionFrog.checked && hatChef.checked) {
            chef.className = 'showing';
            chef3.className = 'showing';
        }

        if (companionBlob.checked && hatChef.checked) {
            chef.className = 'showing';
            chef3.className = 'showing';
        }

        if (companionDog.checked && hatCowboy.checked) {
            cowboy.className = 'showing';
            cowboy2.className = 'showing';
        }

        if (companionCat.checked && hatCowboy.checked) {
            cowboy.className = 'showing';
            cowboy3.className = 'showing';
        }

        if (companionFrog.checked && hatCowboy.checked) {
            cowboy.className = 'showing';
            cowboy4.className = 'showing';
        }

        if (companionBlob.checked && hatCowboy.checked) {
            cowboy.className = 'showing';
            cowboy4.className = 'showing';
        }

        if (companionDog.checked && hatChicken.checked) {
            chicken.className = 'showing';
            chicken2.className = 'showing';
        }

        if (companionCat.checked && hatChicken.checked) {
            chicken.className = 'showing';
            chicken2.className = 'showing';
        }

        if (companionFrog.checked && hatChicken.checked) {
            chicken.className = 'showing';
            chicken3.className = 'showing';
        }

        if (companionBlob.checked && hatChicken.checked) {
            chicken.className = 'showing';
            chicken3.className = 'showing';
        }

        if (treatChocolate.checked) {
            chocolate.className = 'showing';
        }

        if (treatCake.checked) {
            cake.className = 'showing';
        }

        if (treatLollipop.checked) {
            lollipop.className = 'showing';
        }

        if (treatIceCream.checked) {
            icecream.className = 'showing';
        }

        if (userName == '' || companionName == '') {
            alert('Please enter your name and companion\'s name!');
            form1.className = 'showing';
            madlib1.className = 'hidden';
        }

    });

}());