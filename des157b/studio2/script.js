(function(){
    'use strict';
    console.log('loading js');

    const button = document.querySelectorAll('button');
    const expand = document.querySelectorAll('.expand');
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

    for (let x = 0; x < expand.length; x++) {
        button[x].addEventListener('click', function() {
            for(let y = 0; y < expand.length; y++) {
                if (y != x) {
                    expand[y].style.width = '10%';
                    h2[y].className = 'hidden';
                    h3[y].className = 'hidden';
                    expand[x].style.width = '30%';
                    expand[x].style.backgroundImage = `url(images/${x}.png`;
                    h2[x].className = 'showing';
                    h3[x].className = 'showing';
                }
            }
        })
    }
})();