(function() {
    'use strict';
    console.log('reading js');

    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const article = document.querySelector('article');
    const overlayblack = document.querySelector('#overlayblack');
    const overlay1 = document.querySelector('#overlay1');
    const overlay2 = document.querySelector('#overlay2');
    const overlay3 = document.querySelector('#overlay3');
    const overlay4 = document.querySelector('#overlay4');
    const navLinks = document.querySelectorAll('nav ul li a');

    //NAV BACKGROUND APPEARS WHEN PAGE IS SCROLLED
    document.addEventListener('scroll', function() {
        let pagePosition = window.scrollY
        // console.log(pagePosition)
        if (pagePosition > 50) {
            nav.style.backgroundColor = 'rgba(255,255,255,0.5)';
        } 
        if  (pagePosition < 20) {
            nav.style.backgroundColor = 'rgba(255,255,255,0)';
        }
    });

    // SMOOTH SCROLL
    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();

        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);

        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200;
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        console.log(originalTop);
    }

    // TRIGGER OVERLAY ON IMAGE CLICK
    document.querySelector('.image1').addEventListener('click', function() {
        overlayblack.className = 'showing';
        article.className = 'showing';
        overlay1.className = 'showing';
    });

    document.querySelector('.image2').addEventListener('click', function() {
        overlayblack.className = 'showing';
        article.className = 'showing';
        overlay2.className = 'showing';
    });

    document.querySelector('.image3').addEventListener('click', function() {
        overlayblack.className = 'showing';
        article.className = 'showing';
        overlay3.className = 'showing';
    });

    document.querySelector('.image4').addEventListener('click', function() {
        overlayblack.className = 'showing';
        article.className = 'showing';
        overlay4.className = 'showing';
    });

    //SLIDESHOW VARIABLES
    const babyImages = [
        'babyhazel1.JPG',
        'babyhazel2.JPG',
        'babyhazel3.JPG'
    ];
    let currentBaby = 0;
    let secondBaby = 1;
    let thirdBaby = 2;
    const babySlide1 = document.querySelector('#babyslide1');
    const babySlide2 = document.querySelector('#babyslide2');
    const babySlide3 = document.querySelector('#babyslide3');

    const sleepImages = [
        'sleephazel1.JPG',
        'sleephazel2.JPG',
        'sleephazel3.JPG'
    ];
    let currentSleep = 0;
    let secondSleep = 1;
    let thirdSleep = 2;
    const sleepSlide1 = document.querySelector('#sleepslide1');
    const sleepSlide2 = document.querySelector('#sleepslide2');
    const sleepSlide3 = document.querySelector('#sleepslide3');

    const snowImages = [
        'snowhazel1.JPG',
        'snowhazel2.JPG',
        'snowhazel3.JPG'
    ];
    let currentSnow = 0;
    let secondSnow = 1;
    let thirdSnow = 2;
    const snowSlide1 = document.querySelector('#snowslide1');
    const snowSlide2 = document.querySelector('#snowslide2');
    const snowSlide3 = document.querySelector('#snowslide3');

    const derpImages = [
        'derphazel1.JPG',
        'derphazel2.JPG',
        'derphazel3.JPG'
    ];
    let currentDerp = 0;
    let secondDerp = 1;
    let thirdDerp = 2;
    const derpSlide1 = document.querySelector('#derpslide1');
    const derpSlide2 = document.querySelector('#derpslide2');
    const derpSlide3 = document.querySelector('#derpslide3');
    
    // OVERLAY1 SLIDESHOW ARROWS
    document.querySelector('#rightarrow1').addEventListener('click', nextPhoto1);
    
    function nextPhoto1(){
        currentBaby++; //increment the counter
        secondBaby++;
        thirdBaby++;
        if (currentBaby > babyImages.length-1) {
            currentBaby = 0;
            secondBaby = 1;
            thirdBaby = 2;
        }
        if (secondBaby > babyImages.length-1) {
            currentBaby = 2;
            secondBaby = 0;
            thirdBaby = 1;
        }
        if (thirdBaby > babyImages.length-1) {
            currentBaby = 1;
            secondBaby = 2;
            thirdBaby = 0;
        }
        babySlide1.src = `images/${babyImages[currentBaby]}`;
        babySlide2.src = `images/${babyImages[secondBaby]}`;
        babySlide3.src = `images/${babyImages[thirdBaby]}`;
    }

    document.querySelector('#leftarrow1').addEventListener('click', previousPhoto1);

    function previousPhoto1() {
        currentBaby--; // decrement the counter
        secondBaby--;
        thirdBaby--;
        if (currentBaby < 0) {
            currentBaby = babyImages.length - 1;
            secondBaby = 0;
            thirdBaby = 1;
        }
        if (secondBaby < 0) {
            currentBaby = 1;
            secondBaby = babyImages.length - 1;
            thirdBaby = 0;
        }
        if (thirdBaby < 0) {
            currentBaby = 0;
            secondBaby = 1;
            thirdBaby = babyImages.length - 1;
        }
        babySlide1.src = `images/${babyImages[currentBaby]}`;
        babySlide2.src = `images/${babyImages[secondBaby]}`;
        babySlide3.src = `images/${babyImages[thirdBaby]}`;
    }

    // OVERLAY2 SLIDESHOW ARROWS
    document.querySelector('#rightarrow2').addEventListener('click', nextPhoto2);
    
    function nextPhoto2(){
        currentSleep++; //increment the counter
        secondSleep++;
        thirdSleep++;
        if (currentSleep > sleepImages.length-1) {
            currentSleep = 0;
            secondSleep = 1;
            thirdSleep = 2;
        }
        if (secondSleep > sleepImages.length-1) {
            currentSleep = 2;
            secondSleep = 0;
            thirdSleep = 1;
        }
        if (thirdSleep > sleepImages.length-1) {
            currentSleep = 1;
            secondSleep = 2;
            thirdSleep = 0;
        }
        sleepSlide1.src = `images/${sleepImages[currentSleep]}`;
        sleepSlide2.src = `images/${sleepImages[secondSleep]}`;
        sleepSlide3.src = `images/${sleepImages[thirdSleep]}`;
    }

    document.querySelector('#leftarrow2').addEventListener('click', previousPhoto2);

    function previousPhoto2() {
        currentSleep--; // decrement the counter
        secondSleep--;
        thirdSleep--;
        if (currentSleep < 0) {
            currentSleep = sleepImages.length - 1;
            secondSleep = 0;
            thirdSleep = 1;
        }
        if (secondSleep < 0) {
            currentSleep = 1;
            secondSleep = sleepImages.length - 1;
            thirdSleep = 0;
        }
        if (thirdSleep < 0) {
            currentSleep = 0;
            secondSleep = 1;
            thirdSleep = sleepImages.length - 1;
        }
        sleepSlide1.src = `images/${sleepImages[currentSleep]}`;
        sleepSlide2.src = `images/${sleepImages[secondSleep]}`;
        sleepSlide3.src = `images/${sleepImages[thirdSleep]}`;
    }

    // OVERLAY3 SLIDESHOW ARROWS
    document.querySelector('#rightarrow3').addEventListener('click', nextPhoto3);
    
    function nextPhoto3(){
        currentSnow++; //increment the counter
        secondSnow++;
        thirdSnow++;
        if (currentSnow > snowImages.length-1) {
            currentSnow = 0;
            secondSnow = 1;
            thirdSnow = 2;
        }
        if (secondSnow > snowImages.length-1) {
            currentSnow = 2;
            secondSnow = 0;
            thirdSnow = 1;
        }
        if (thirdSnow > snowImages.length-1) {
            currentSnow = 1;
            secondSnow = 2;
            thirdSnow = 0;
        }
        snowSlide1.src = `images/${snowImages[currentSnow]}`;
        snowSlide2.src = `images/${snowImages[secondSnow]}`;
        snowSlide3.src = `images/${snowImages[thirdSnow]}`;
    }

    document.querySelector('#leftarrow3').addEventListener('click', previousPhoto3);

    function previousPhoto3() {
        currentSnow--; // decrement the counter
        secondSnow--;
        thirdSnow--;
        if (currentSnow < 0) {
            currentSnow = snowImages.length - 1;
            secondSnow = 0;
            thirdSnow = 1;
        }
        if (secondSnow < 0) {
            currentSnow = 1;
            secondSnow = snowImages.length - 1;
            thirdSnow = 0;
        }
        if (thirdSnow < 0) {
            currentSnow = 0;
            secondSnow = 1;
            thirdSnow = snowImages.length - 1;
        }
        snowSlide1.src = `images/${snowImages[currentSnow]}`;
        snowSlide2.src = `images/${snowImages[secondSnow]}`;
        snowSlide3.src = `images/${snowImages[thirdSnow]}`;
    }

    // OVERLAY4 SLIDESHOW ARROWS
    document.querySelector('#rightarrow4').addEventListener('click', nextPhoto4);
    
    function nextPhoto4(){
        currentDerp++; //increment the counter
        secondDerp++;
        thirdDerp++;
        if (currentDerp > derpImages.length-1) {
            currentDerp = 0;
            secondDerp = 1;
            thirdDerp = 2;
        }
        if (secondDerp > derpImages.length-1) {
            currentDerp = 2;
            secondDerp = 0;
            thirdDerp = 1;
        }
        if (thirdDerp > derpImages.length-1) {
            currentDerp = 1;
            secondDerp = 2;
            thirdDerp = 0;
        }
        derpSlide1.src = `images/${derpImages[currentDerp]}`;
        derpSlide2.src = `images/${derpImages[secondDerp]}`;
        derpSlide3.src = `images/${derpImages[thirdDerp]}`;
    }

    document.querySelector('#leftarrow4').addEventListener('click', previousPhoto4);

    function previousPhoto4() {
        currentDerp--; // decrement the counter
        secondDerp--;
        thirdDerp--;
        if (currentDerp < 0) {
            currentDerp = derpImages.length - 1;
            secondDerp = 0;
            thirdDerp = 1;
        }
        if (secondDerp < 0) {
            currentDerp = 1;
            secondDerp = derpImages.length - 1;
            thirdDerp = 0;
        }
        if (thirdDerp < 0) {
            currentDerp = 0;
            secondDerp = 1;
            thirdDerp = derpImages.length - 1;
        }
        derpSlide1.src = `images/${derpImages[currentDerp]}`;
        derpSlide2.src = `images/${derpImages[secondDerp]}`;
        derpSlide3.src = `images/${derpImages[thirdDerp]}`;
    }

    // X BUTTON TO EXIT OVERLAY
    document.querySelector('#close1').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('article').className = 'hidden';
            document.querySelector('#overlayblack').className = 'hidden';
            overlay1.className = 'hidden';
            overlay2.className = 'hidden';
            overlay3.className = 'hidden';
            overlay4.className = 'hidden';
    });

    document.querySelector('#close2').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('article').className = 'hidden';
            document.querySelector('#overlayblack').className = 'hidden';
            overlay1.className = 'hidden';
            overlay2.className = 'hidden';
            overlay3.className = 'hidden';
            overlay4.className = 'hidden';
    });

    document.querySelector('#close3').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('article').className = 'hidden';
            document.querySelector('#overlayblack').className = 'hidden';
            overlay1.className = 'hidden';
            overlay2.className = 'hidden';
            overlay3.className = 'hidden';
            overlay4.className = 'hidden';
    });

    document.querySelector('#close4').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('article').className = 'hidden';
            document.querySelector('#overlayblack').className = 'hidden';
            overlay1.className = 'hidden';
            overlay2.className = 'hidden';
            overlay3.className = 'hidden';
            overlay4.className = 'hidden';
    });

    // ESC KEY TO EXIT OVERLAY
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelector('article').className = 'hidden';
            document.querySelector('#overlayblack').className = 'hidden';
            overlay1.className = 'hidden';
            overlay2.className = 'hidden';
            overlay3.className = 'hidden';
            overlay4.className = 'hidden';
        }
    })

}());