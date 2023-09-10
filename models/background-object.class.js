class BackgroundObject extends MovableObject{

    width = 720;
    height = 480;
    constructor(imagePath, x){
        super().loadImage(imagePath); // super()= von movableObject das Bild laden
        this.x = x;
        this.y = 480 - this.height;
        
        
    }
}