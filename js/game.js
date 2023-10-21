let canvas;
let world;
let keyboard = new Keyboard();


function startScreen() {
    canvas = document.getElementById('canvas');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('win').classList.add('d-none');
}


function init() {
    initLevel();
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is,', world.character);
    
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