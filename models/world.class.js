class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    bottles = [];
    coins = [];
    

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


    run(){
        setInterval(() =>{
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects(){
        if(this.keyboard.D && this.bottles.length > 0){
            let bottle = new ThrowableObject(this.character.x +100, this.character.y +100);
            this.throwableObjects.push(bottle);
            this.statusBarBottle.bottles--;
            this.statusBarBottle.setPercentage();
            this.bottles.length--;
        }
    }

    
    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    enemy.isDead = true;
                    // bottle.isBottleSplash = true;
                    // bottle.stopToMoveBottle = true;
                }
            });

        });
        
        this.throwableObjects.forEach((bottle) => {
            setTimeout(() => {
                // bottle.isBottleSplash = true;
                // bottle.stopToMoveBottle = true;
            }, 1200);

        });


        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy)) {
                    enemy.isDead = true;
                    // bottle.isBottleSplash = true;
                    // bottle.stopToMoveBottle = true;
                }
            });

        });
        // if(this.character.collidingFromBottom()){
        //     console.log('Hallo');
        // }


        this.level.bottle.forEach( (bottle) => {
            if(this.character.isColliding(bottle) ){
                this.bottles.push(1);
                this.statusBarBottle.bottles++;
                bottle.x = 0;
                bottle.y = -1000;
                this.statusBarBottle.setPercentage();
            }
        });

        this.level.coins.forEach( (coin) => {
            if(this.character.isColliding(coin) ){
                this.coins.push(1);
                this.statusBarCoins.coins++;
                coin.x = 0;
                coin.y = -1000;
                this.statusBarCoins.setPercentage();
            }
        });


        this.level.enemies.forEach ((enemy) =>{
            if(!enemy.isDead && this.character.isColliding(enemy)){
                if (this.character.y + this.character.height > enemy.y && this.character.isAboveGround() && !this.character.isHurt()) {
                    enemy.isDead = true;
                } else{
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }}
        });
    }
    
    
    

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        
        
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
       
        


        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        if(this.character.x >= 4200){
        this.addToMap(this.statusBarEndboss);}
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


    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    
    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}