class Endboss extends MovableObject {
    height = 500;
    width = 300;
    y = -35;
    energy = 100;
    offset = {
        top: 0,
        left: 28,
        right: 28,
        bottom: 0
    }
    firstContact = false;
    ENDBOSS_HURT = new Audio('audio/endboss-hurt.mp3');
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); // super()= von movableObject das Bild laden
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 4700;
        this.speed = 5;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.ENDBOSS_HURT.pause();
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.win();
            } else
                if (this.isEndbossHurt()) {
                    this.endbossHurt();
                } else if (this.endbossAttackCharacter()) {
                    this.moveLeft();
                }
        }, 200);
    }

    isEndbossHurt() {
        return this.isHurt();
    }

    endbossHurt() {
    // if(world.level.bottle.dontMakeDamageMore == true){
    //     console.log('asdasd');
    //     this.bottle.x = 9000;
    //     this.bottle.y = 9000;
    //     this.bottle.width = 0;
    //     this.bottle.height = 0;
    //     world.level.bottle.dontMakeDamageMore = false;
    // }
        this.ENDBOSS_HURT.play();
        this.CHICKEN_DEAD.play();
        this.playAnimation(this.IMAGES_HURT);
    }

    endbossAttackCharacter() {
        return world.character.x > 4200 || this.firstContact;
    }

    moveLeft() {
        this.firstContact = true;
        this.playAnimation(this.IMAGES_ATTACK);
        super.moveLeft();
    }
}