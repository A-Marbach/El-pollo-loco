class Coins extends MovableObject {
    y = 250;
    x;
    height = 100;
    width = 100;
    offset = {
        top: 25,
        left: 25,
        right: 25,
        bottom: 25
    }
    COINS_IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    
    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.COINS_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS_IMAGES);
        }, 200);
    }
}
