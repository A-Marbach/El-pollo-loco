class ThrowableObject extends MovableObject {
    isBottleSplash = false;
    stopToMoveBottle = false;
    IMAGES_SPLASH_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]
    IMAGES_ROTATION_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]


    constructor(x, y) {
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_ROTATION_BOTTLE);
        this.loadImages(this.IMAGES_SPLASH_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 50;
        this.throw();
    }

    //calculate speed for the bottle
    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            if (!this.stopToMoveBottle) {
                this.x += 8;
            }
        }, 50);
        setInterval(() => {
            if (!this.isBottleSplash) {
                this.playAnimation(this.IMAGES_ROTATION_BOTTLE);
            } else if (this.isBottleSplash) {
                this.playAnimation(this.IMAGES_SPLASH_BOTTLE);
                this.x += 0.001;
                setTimeout(() => {
                    this.isBottleSplash = false;
                    
                }, 1000);
            }
        }, 100);
    }
}