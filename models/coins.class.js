class Coins extends MovableObject {
  y = 200;
 x;
 offset = {
    top: 50,
    left: 30,
    right: -60,
    bottom: -100
}

    COINS_IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];


    
    constructor(x){
        super().loadImage('img/8_coin/coin_1.png'); // super()= von movableObject das Bild laden
      
        this.loadImages(this.COINS_IMAGES);
        this.x = x;
        this.x +=  Math.random() *2500;
        // this.y = + Math.random() *500;
        // this.speed = 0.15 + Math.random() *0.5;

        this.animate();
    }

    animate(){
       
    setInterval( () => {
       this.playAnimation(this.COINS_IMAGES);
    //    this.walking_sounds.play();
    }, 200);
    }


}
