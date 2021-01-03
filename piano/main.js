//get all keys

const keys = document.querySelectorAll(".key");

//play notes
function playNote(event) {
    //console.log(event);
    //console.log(event.type)
    //console.log(event.target)
    //console.log(event.keyCode)--> busca codigo de cada tecla do teclado
    //console.log(event.target.dataset.key)--> busca propriedade data do teu elemento e no caso foi key

    //keyCode
    let audioKeyCode = getKeyCode(event);
    //console.log(audioKeyCode);

    //typed or pressed keya
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
    //console.log(key);

    //if key exists
    const cantFoundAnyKey = !key;
    cantFoundAnyKey //não pode achar nenhuma tecla
    //console.log(!isKeyExists);
    if (cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key);
    playAudio(audioKeyCode);

}

function addPlayingClass(key){
    key.classList.add('playing')
}

//get key code keyboard or click with mouse
function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
    //console.log(event.type);
    //console.log(keyCode);
    return keyCode;
}

//play audio
function playAudio(audioKeyCode) {
    //console.log('play audio');
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    //console.log(audio)
    audio.currentTime = 0;
    audio.play();
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

//click with mouse
keys.forEach(function (key) {
    //console.log(key)
    //console.log(key.dataset.note)
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
});

//keyboard type
window.addEventListener("keydown", playNote);
