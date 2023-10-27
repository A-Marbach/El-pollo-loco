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


    /**
    * this constructor pain and animation the coin
    * 
    * @param {number} x this is the x coordinate of the coin
    * @param {number} y this is the y coordinate of the coin
    */
    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.COINS_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * this function animate the coin
     * 
     * 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS_IMAGES);
        }, 200);
    }
}
