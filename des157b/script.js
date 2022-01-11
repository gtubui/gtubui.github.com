(function() {
    'use strict';

    const button = document.querySelector('button');
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const footertext = document.querySelector('#footertext');
    let mode = 'dark';
    const darkanim = document.querySelector('#darkanim');
    const lightanim = document.querySelector('#lightanim');

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            html.className = 'switch';
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            footertext.innerHTML = '...wherever you are';
            darkanim.style.display = 'none';
            lightanim.style.display = 'block';
            mode = 'light';
            
        } else {
            html.removeAttribute('class');
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            footertext.innerHTML = '...beneath the stars';
            darkanim.style.display = 'block';
            lightanim.style.display = 'none';
            mode = 'dark'
        }
    })
})()