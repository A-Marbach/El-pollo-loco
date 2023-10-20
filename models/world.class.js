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

    statusBar = new Statusbar();
    statusBarEndboss = new StatusBarEndboss();
    statusBarBottle = new StatusBarBottle();
    statusBarCoins = new StatusBarCoins();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }


    //throw a bottle
    checkThrowObjects() {
        if (this.whenIHaveBottle()) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.statusBarBottle.bottles--;
            this.statusBarBottle.setPercentage();
            this.bottles.length--;
        }
    }


    whenIHaveBottle(){
        return this.keyboard.D && this.bottles.length > 0;
    }


    checkCollisions() {
        //Bottle collision with chicken
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    enemy.isDead = true;
                    console.log('yes');
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
                    // bottle.isBottleSplash = true;
                    // bottle.stopToMoveBottle = true;
                }
            });
        });
        //Bottle collision with endboss
        this.level.endboss.forEach((e) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(e)) {
                    bottle.isBottleSplash = true;
                    e.isDead = true;
                    this.level.endboss[0].endbossHit();
                    this.statusBarEndboss.setPercentage(this.level.endboss[0].energy);
                    // bottle.isBottleSplash = true;
                    // bottle.stopToMoveBottle = true;
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
        this.level.endboss.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.y + this.character.height > enemy.y && this.character.isAboveGround() && !this.character.isHurt()) {
                    enemy.isDead = true;
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });
    }


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
        if (this.character.x > 4200 && !this.firstContact) {
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


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


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


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}