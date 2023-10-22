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


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 30);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 220;
        }
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energy == 0;
    }


    endbossHit() {
        this.energy -= 34;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    endbossIsDead() {
        return this.energy == 0;
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }


    isCollidingWithBottleOrCoin(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }



    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0, 1, 2, 3, 4, 5, 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    jump() {
        this.speedY = 15;
    }


    win() {
        // this.ENDBOSS_HURT.play();
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


    gameOver() {
        this.lose_sound.play();
        setTimeout(() => {
            let gameOver = document.getElementById('game-over');
            gameOver.classList.remove('d-none');
            this.clearAllIntervals();
        }, "1500");
    }


    youWin() {
        setTimeout(() => {
            let win = document.getElementById('win');
            win.classList.remove('d-none');
            this.clearAllIntervals();
        }, "50");
    }
}



