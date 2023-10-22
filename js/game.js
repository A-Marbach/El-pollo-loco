let canvas;
let world;
let keyboard = new Keyboard();
let sound_is_mute = false;

function startScreen() {
    document.getElementById('start-screen').classList.remove('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('win').classList.add('d-none');
    document.getElementById('info').style.opacity = 1;
}


function init() {
    initLevel();
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('info').style.opacity = 0.2;
    document.getElementById('win').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function muteSound() {
    let sound = document.getElementById('mute');
    if (!sound_is_mute) {
        sound_is_mute = true;
        sound.src = 'img/ton-aus.png';
    document.getElementById('mute').style.opacity = 0.2;

    } else if(sound_is_mute){
        sound.src = 'img/ton-an.png';
        sound_is_mute = false;
    document.getElementById('mute').style.opacity = 1;

    }
}

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }


window.addEventListener("keydown", (e) => { //Tastatur wird gedrückt
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.JUMP = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.JUMP = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});