class StatusBarCoins extends MovableObject {
    width = 200;
    height = 40;
    coins = 0;

    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',


    ];




    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 20;
        this.y = 100;
        this.setPercentage(0);
    }


    setPercentage() {

        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];


    }


    resolveImageIndex() {

        if (this.coins == 0) {
            return 0;
        } else if (this.coins <= 2) {
            return 1;
        } else if (this.coins <= 4) {
            return 2;
        } else if (this.coins <= 6) {
            return 3;
        } else if (this.coins <= 8) {
            return 4;
        } else {
            return 5;
        }
    }
}