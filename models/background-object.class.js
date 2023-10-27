class BackgroundObject extends MovableObject{
    width = 720;
    height = 480;

    
    /**
     * this constructor pain and animation the backgroundobject
     * 
     * @param {string} imagePath the url from the backgroundobject
     * @param {number} x this is the x coordinate of the backgroundobject
     */
    constructor(imagePath, x){
        super().loadImage(imagePath); // super()= von movableObject das Bild laden
        this.x = x;
        this.y = 480 - this.height;
    }
}