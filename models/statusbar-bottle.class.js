class StatusBarBottle extends MovableObject {
    width = 200;
    height = 40;
    bottles = 0;
    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 20;
        this.y = 70;
        this.setPercentage();
    }

    /**
     * This function loads the appropriate image for the status bar
     * 
     * 
     */
    setPercentage() {
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * This function calculates which image is the right one for the status bar
     * 
     * 
     */
    resolveImageIndex() {
        if (this.bottles == 0) {
            return 0;
        } else if (this.bottles <= 2) {
            return 1;
        } else if (this.bottles <= 4) {
            return 2;
        } else if (this.bottles <= 6) {
            return 3;
        } else if (this.bottles <= 8) {
            return 4;
        } else {
            return 5;
        }
    }
}