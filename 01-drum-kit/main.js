document.addEventListener("DOMContentLoaded", function(){

    function playingSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(!audio){
            return
        }
        key.classList.add(`playing`);
        audio.currentTime = 0;
        audio.play();
    }

    function removeClassPlaying(e){
        // if (e.propertyName !== 'transform') return;  // remove it because when press A => don't remove playing class
        e.target.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener("transitionend", removeClassPlaying));
    keys.forEach(key => key.addEventListener("touchstart", playingSoundMouse));

    function playingSoundMouse(e){
        const dataKey = this.dataset.key
        if(!dataKey){
            return
        }
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
        if(!audio){
            return
        }
        this.classList.add(`playing`);
        audio.currentTime = 0;
        audio.play();
    }

    window.addEventListener('keydown', playingSound)
});
