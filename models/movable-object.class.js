class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    CHICKEN_DEAD = new Audio('audio/chicken-dead.mp3');
    win_sound = new Audio('audio/win.mp3');
    lose_sound = new Audio('audio/lose.mp3');
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }


    /**
     * this function calculated the gravitation
     * 
     * 
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    /**
     * this function clear All Intervals for new game
     * 
     * 
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        sound_is_mute = false;
        document.getElementById('mute').src = 'img/ton-aus.png';
        document.getElementById('mute').style.opacity = 0.3;
    }

    /**
     * this function checks is above ground or not
     * 
     * 
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 220;
        }
    }

    /**
     * this function gives damage
     * 
     * @param {number} damage That's the damage to the character or the final boss
     */
    hit(damage = 5) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * this function checked last hurt  
     *
     * 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.3;
    }

    /**
     * this function give return when the character or final boss is dead
     * 
     * 
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * this function checked the collision for character and enemies
     * 
     * @param {string} mo enemy, bottle or coin
     * 
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    /**
     * this function move to right
     * 
     * 
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * this function move to left
     * 
     * 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * this function loads all images from an array
     * 
     * @param {string} images Image that is loaded for the animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * this function is for the jump of the character
     * 
     * 
     */
    jump() {
        this.speedY = 17;
    }

    /**
     * This function is carried out when the character has won
     * 
     * 
     */
    win() {
        this.win_sound.play();
        setInterval(() => {
            setTimeout(() => {
                world.level.endboss[0].y += 10;
            }, "500");
            if (world.level.endboss[0].y > 500) {
                this.youWin();

            }
        }, 10000 / 60);
    }

    /**
     * this function load the win screen
     * 
     * 
     */
    youWin() {
        setTimeout(() => {
            let win = document.getElementById('win');
            win.classList.remove('d-none');
            this.clearAllIntervals();
            background_sound.pause();
        }, "50");
    }

    /**
     * This function is carried out when the character has lose
     * 
     * 
     */
    gameOver() {
        this.lose_sound.play();
        setTimeout(() => {
            let gameOver = document.getElementById('game-over');
            gameOver.classList.remove('d-none');
            this.clearAllIntervals();
            background_sound.pause();
        }, "1500");
    }
}



