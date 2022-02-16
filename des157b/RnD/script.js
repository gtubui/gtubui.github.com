(function() {
    'use strict';

    window.onload = () => {
        const container = document.querySelector('#container')

        const masonry = new Masonry(container, {
            itemSelector: '.grid-item',
            gutter: 6.5,
        });
    }
})()