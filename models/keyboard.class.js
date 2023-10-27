class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    JUMP = false;
    D = false;


    constructor() {
        this.pressKeyboard();
        setTimeout(() => {
            this.touchMobileBtn();  //timeout so that the IDs can be loaded and then accessed
          }, "1000");
    }


    pressKeyboard(){
        window.addEventListener("keydown", (e) => { 
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
    }

    touchMobileBtn() {
        document.getElementById('btn-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
           keyboard.LEFT = true;
        });
        document.getElementById('btn-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.LEFT = false;
        });
        document.getElementById('btn-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.RIGHT = true;
        });
        document.getElementById('btn-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.RIGHT = false;
        });
        document.getElementById('btn-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.JUMP = true;
        });
        document.getElementById('btn-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.JUMP = false;
        });
        document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.D = true;
        });
        document.getElementById('btn-throw').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.D = false;
        });
    }

}