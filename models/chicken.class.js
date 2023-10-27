class Chicken extends MovableObject {
    y = 340;
    height = 100;
    width = 70;
    x;
    offset = {
        top: 0,
        left: 0,
        right: 24,
        bottom: 0
    }

    isDead = false;
    CHICKEN_DEAD = new Audio('audio/chicken-dead.mp3');
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]


    /**
     * this constructor pain and animation the chicken
     * 
     * @param {number} x this is the x coordinate of the chicken
     */
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    /**
     * this function checked situation of the chicken
     * 
     * 
     */
    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60);
        setInterval(() => this.playChicken(), 80);
    }

    /**
     * this function animate the chicken
     * 
     * 
     */
    playChicken() {
        if (!this.isDead) {
            this.playAnimation(this.IMAGES_WALKING);
        } else if (this.isChickenDead()) {
                this.chickenIsDead();
            }
    }

    /**
     * this function give return if the chicken is dead
     *  
     * 
     */
    isChickenDead() {
        return this.isDead;
    }

    /**
     * this function animate the chicken if he is dead
     * 
     * 
     */
    chickenIsDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.CHICKEN_DEAD.play();
        this.speed = 0;
        setTimeout(() => {
            this.y = 900;
            this.isDead = false;
        }, 1000);
    }
}