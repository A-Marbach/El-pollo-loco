class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    bottles = [];
    coins = [];
    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');
    statusBar = new Statusbar();
    statusBarEndboss = new StatusBarEndboss();
    statusBarBottle = new StatusBarBottle();
    statusBarCoins = new StatusBarCoins();
    throwableObjects = [];


    /**
     * this function creates the world
     * 
     * @param {string} canvas In this Canvas we pain all Objects
     * @param {string} keyboard Press Keyboard to move with Character
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.sound();
    }

    /**
     * this function checks the sound
     * 
     */
    sound() {
        setInterval(() => {
            if (!sound_is_mute) {
                background_sound.pause();
            } else if (sound_is_mute) {
                background_sound.play();
            }
        }, 100)
    }

    /**
     * this function passes this to all other classes
     * 
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * This function checks collisions
     * 
     */
    run() {
        setInterval(() => this.checkCollisions(), 80);
        setInterval(() => this.checkThrowObjects(), 120);
    }

    /**
     * this function checks throw
     * 
     */
    checkThrowObjects() {
        if (this.whenIHaveBottle()) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.statusBarBottle.bottles--;
            this.statusBarBottle.setPercentage();
            this.bottles.length--;
        }
    }

    /**
     * this function Check whether the character has a bottle or not
     * 
     * 
     */
    whenIHaveBottle() {
        return this.keyboard.D && this.bottles.length > 0;
    }

    /**
     * this function checks the collision with everything
     * 
     * 
     */
    checkCollisions() {
        //Bottle collision with chicken
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    enemy.isDead = true;
                    bottle.isBottleSplash = true;
                }
            });
        });
        //Bottle collision with small chicken
        this.level.enemies_small.forEach((e) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(e)) {
                    e.isDead = true;
                    bottle.isBottleSplash = true;
                }
            });
        });
        //Bottle collision with endboss
        this.level.endboss.forEach((e) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(e)) {
                    bottle.isBottleSplash = true;
                    bottle.x = 0;
                    bottle.y = -1000;
                    this.level.endboss[0].hit(34);
                    this.statusBarEndboss.setPercentage(this.level.endboss[0].energy);
                }
            });
        });

        //Character collects a bottle
        this.level.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottles.push(1);
                this.statusBarBottle.bottles++;
                bottle.x = 0;
                bottle.y = -1000;
                this.bottle_sound.play();
                this.statusBarBottle.setPercentage();
            }
        });

        //Character collects a coin
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coins.push(1);
                this.statusBarCoins.coins++;
                coin.x = 0;
                coin.y = -1000;
                this.coin_sound.play();
                this.statusBarCoins.setPercentage();
            }
        });

        //Character jump on chicken
        this.level.enemies.forEach((enemy) => {
            if (!enemy.isDead && this.character.isColliding(enemy)) {
                if (this.character.y + this.character.height > enemy.y && this.character.isAboveGround() && !this.character.isHurt()) {
                    enemy.isDead = true;
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });

        //Character jump on small chicken
        this.level.enemies_small.forEach((enemy) => {
            if (!enemy.isDead && this.character.isColliding(enemy)) {
                if (this.character.y + this.character.height > enemy.y && this.character.isAboveGround() && !this.character.isHurt()) {
                    enemy.isDead = true;
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });

        //Character collision with enemies and hit the Character
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                if (this.character.y + this.character.height > endboss.y && !this.character.isHurt())
                    this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * this function draw the world with all Objects
     * 
     * 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enemies_small);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObjects);

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        if (this.character.x > 4200 && !this.firstContact) {  //show status bar of final boss first Time
            this.addToMap(this.statusBarEndboss);
            this.firstContact = true;
        } else if (this.firstContact == true) {
            this.addToMap(this.statusBarEndboss);
        }
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoins);

        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);

        //draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * this function looks for all the objects
     * 
     * @param {string} objects the string 'object' are all objects to pain in canvas 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * this function checked the position of character
     * 
     * @param {string} mo this is the character
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * this function flipped image from character
     * 
     * @param {string} mo this is the character
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * this function flipped image back from character
     * 
     * @param {string} mo this is the character
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}