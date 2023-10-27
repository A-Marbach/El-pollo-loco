let level1;

function initLevel() {

    level1 = new Level(
        createChickens(),
        createClouds(),
        createBackgroundObjects(),
        createCoins(),
        createBottles(),
        createSmallChickens(),
        createEndboss(),
    );

    
    function createChickens() {
        return  [
            new Chicken(1000),
            new Chicken(1500),
            new Chicken(2500),
            new Chicken(3000)
        ]
    }


    function createClouds(){
        return [
            new Cloud(0),
            new Cloud(600),
            new Cloud(1200),
            new Cloud(1800),
            new Cloud(2400),
            new Cloud(3000),
            new Cloud(3600),
            new Cloud(4200),
            new Cloud(4800),
            new Cloud(5400),
        ]
    }


    function createBackgroundObjects(){
        return [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 1438),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 1438),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 1438),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 1438),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6)
        ]
    }


    function createCoins(){
        return [
            new Coins(600, 250),
            new Coins(1100, 200),
            new Coins(1500, 140),
            new Coins(2000, 160),
            new Coins(2500, 140),
            new Coins(3000, 260),
            new Coins(3300, 140),
            new Coins(3700, 160),
            new Coins(4000, 240)

        ]
    }


    function createBottles(){
        return  [
            new Bottle(350, 200),
            new Bottle(100, 150),

            new Bottle(1200, 360),
            new Bottle(1900, 200),
            new Bottle(2200, 150),
            new Bottle(2500, 200),
            new Bottle(3000, 150),
            new Bottle(3200, 360),
            new Bottle(3500, 360)
           
        ]
    }
        

    function createSmallChickens(){
        return [
            new SmallChicken(1200),
            new SmallChicken(1700),
            new SmallChicken(2200),
            new SmallChicken(2900),
            new SmallChicken(3500)
        ]
    }


    function createEndboss(){
        return [
            new Endboss()
        ]
    }
}