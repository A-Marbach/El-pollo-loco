class SmallChicken extends MovableObject {
    y = 360;
    height = 80;
    width = 50;
    x;
    isDead = false;
    SMALL_CHICKEN_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    SMALL_CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    // walking_sounds = new Audio('audio/chicken_walk.mp3');
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.SMALL_CHICKEN_WALKING);
        this.loadImages(this.SMALL_CHICKEN_DEAD);
        this.x = x;
        // this.x = 800 + Math.random() *1000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.imgAnimate();
        this.animate();
    }


    imgAnimate() {
        setInterval(() => {
            // this.chicken_sound.pause();
            if (!this.isDead) {
                this.playAnimation(this.SMALL_CHICKEN_WALKING);
            } else if (this.isDead) {
                this.playAnimation(this.SMALL_CHICKEN_DEAD);
                this.CHICKEN_DEAD.play();
                // this.chicken_sound.play();
                this.y = 380;
                this.speed = 0;
                setTimeout(() => {
                    this.width = 0;
                    this.height = 0;
                    this.y = 900;
                }, 500);
                setTimeout(() => {
                    this.isDead = false;
                }, 800);
            }
        }, 120)
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.SMALL_CHICKEN_WALKING);
            //    this.walking_sounds.play();
        }, 200);
    }
}