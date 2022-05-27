const keys = document.querySelectorAll(".key");

const playNote = (event) => {
    let audioKeyCode = getAudioKeyCode(event);
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`);
    const cantFoundAnyKey = !key;

    if (cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key);
    playAudio(audioKeyCode);
};

const addPlayingClass = (key) => {
    key.classList.add("playing");
};

const getAudioKeyCode = (event) => {
    let keyCode;
    const isKeyboard = event.type === "keydown";

    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
};

const playAudio = (audioKeyCode) => {
    let audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
};

const removePlayingClass = (event) => {
    event.target.classList.remove("playing");
};

keys.forEach((key) => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
});

window.addEventListener("keydown", playNote);
