(function(){
    'use strict';
    console.log('loading js');

    const button = document.querySelectorAll('button');
    const expand = document.querySelectorAll('.expand');
    const main = document.querySelector('main');
    const p = document.querySelectorAll('p');

    // async function getData() {
    //     const dc = await fetch('data/dc.json');
    //     const data = await dc.json();
    //     console.log(data); 
    // }

    button[0].addEventListener('click', function() {
        expand[0].style.width = '30%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[0].style.backgroundImage = 'url(images/1.png)';
    })

    button[1].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '30%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[1].style.backgroundImage = 'url(images/2.png)';
    })

    button[2].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '30%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[2].style.backgroundImage = 'url(images/3.png)';
    })

    button[3].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '30%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[3].style.backgroundImage = 'url(images/4.png)';
    })

    button[4].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '30%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[4].style.backgroundImage = 'url(images/5.png)';
    })

    button[5].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '30%';
        expand[6].style.width = '10%';
        expand[7].style.width = '10%';
        expand[5].style.backgroundImage = 'url(images/6.png)';
    })

    button[6].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '30%';
        expand[7].style.width = '10%';
        expand[6].style.backgroundImage = 'url(images/7.png)';
    })

    button[7].addEventListener('click', function() {
        expand[0].style.width = '10%';
        expand[1].style.width = '10%';
        expand[2].style.width = '10%';
        expand[3].style.width = '10%';
        expand[4].style.width = '10%';
        expand[5].style.width = '10%';
        expand[6].style.width = '10%';
        expand[7].style.width = '30%';
        expand[7].style.backgroundImage = 'url(images/8.png)';
    })
})();