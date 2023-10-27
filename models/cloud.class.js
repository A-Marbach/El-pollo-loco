class Cloud extends MovableObject{
    y = 50;
    width = 500;
    height = 200;
    x;
    CLOUD_IMAGE =[
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png'
    ];
    

   /**
    * this constructor pain and animation the cloud
    * 
    * @param {number} x this is the x coordinate of the coin
    */
    constructor(x){
        super().loadImage('img/5_background/layers/4_clouds/1.png'); // super()= von movableObject das Bild laden
        this.loadImages(this.CLOUD_IMAGE);
        this.x = x;
        this.animate();
    }

    /**
     * this function animate the cloud
     * 
     * 
     */
    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}

    


