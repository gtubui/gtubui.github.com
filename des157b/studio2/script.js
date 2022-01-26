(function(){
    'use strict';
    console.log('loading js');

    const button = document.querySelectorAll('button');
    const expand = document.querySelectorAll('.expand');
    const main = document.querySelector('main');
    const p = document.querySelectorAll('p');
    const aside = document.querySelector('aside');
    const info = document.querySelector('.fa-question-circle');
    const close = document.querySelector('.fa-times-circle');
    const h2 = document.getElementsByTagName('h2');
    const h3 = document.getElementsByTagName('h3');

    info.addEventListener('click', function() {
        aside.className = 'showing';
    })

    close.addEventListener('click', function() {
        aside.className = 'hidden';
    })

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