(function(){
    'use strict';

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const load = document.querySelector('.fa-cloud-moon');

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {

        // loading icon disappears when video begins
        if (myVideo.currentTime > 0) {
            load.style.display = 'none';
        }

        // start of first line
        if (myVideo.currentTime < 1) {
            line1.className = 'hidden';
        } else {
            line1.className = 'typing1'
        }

        // start of second line
        if (myVideo.currentTime > 5) {
            line2.className = 'typing2';
        } else {
            line2.className = 'hidden';
        }
        
    }

    // video hue changes with mouseX position
    myVideo.addEventListener('mousemove', function(event) {
        let hue = event.clientX / 3.8
        myVideo.style.filter = `hue-rotate(${hue}deg)`

    })

})();
