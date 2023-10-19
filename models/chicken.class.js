class Chicken extends MovableObject{
    y = 340;
    height = 100;
    width =70;
    x;
    isDead = false;
 
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    CHICKEN_DEAD = new Audio('audio/chicken-dead.mp3');

    // walking_sounds = new Audio('audio/chicken_walk.mp3');
    constructor(x){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x;
        // this.x = 400 + Math.random() *2500;
        this.speed = 0.15 + Math.random() *0.5;

        this.animate();
        this.imgAnimate();
    }

    imgAnimate() {

        setInterval(() => {
            
            // this.chicken_sound.pause();
            if (!this.isDead) {
                this.playAnimation(this.IMAGES_WALKING);
                
            } else if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
                // this.chicken_sound.play();
                this.CHICKEN_DEAD.play();
                this.y = 350;
                this.speed = 0;
                setTimeout(() => {
                    this.width = 0;
                    this.height = 0;
                    this.y = 900;
                    this.isDead = false;
                }, 500);
            }

        }, 120)
    }



    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
    setInterval( () => {
       this.playAnimation(this.IMAGES_WALKING);
    //    this.walking_sounds.play();
    }, 200);
    }


}