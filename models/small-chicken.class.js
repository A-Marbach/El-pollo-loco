class SmallChicken extends MovableObject {
    y = 360;
    height = 80;
    width = 50;
    x;
    isDead = false;
    offset = {
        top: 0,
        left: 0,
        right: 24,
        bottom: 0
    }
    SMALL_CHICKEN_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    SMALL_CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.SMALL_CHICKEN_WALKING);
        this.loadImages(this.SMALL_CHICKEN_DEAD);
        this.x = x;
        // this.x = 800 + Math.random() *1000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }


    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60);
        setInterval(() => this.playChicken(), 80)
    }

    playChicken(){
        if (!this.isDead) {
            this.playAnimation(this.SMALL_CHICKEN_WALKING);
        } else if (this.isSmallChickenDead()) {
            this.smallChickenIsDead();
        }
    }

    isSmallChickenDead(){
       return this.isDead;
    }

    smallChickenIsDead(){
        this.playAnimation(this.SMALL_CHICKEN_DEAD);
                this.CHICKEN_DEAD.play();
                this.speed = 0;
                setTimeout(() => {
                    
                    this.y = 900;
                    this.isDead = false;
                }, 1000);
    }
}