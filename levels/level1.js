let level1;

function initLevel() {

    level1 = new Level(
        [
            new Chicken(1000),
            new Chicken(),
            new Chicken(1600),
            new Chicken(2200),
            new Chicken(2000)
           
        ],
        [
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
        ],

        [
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
        ],
        [
            new Coins(300, 160),
            new Coins(600, 250),
            new Coins(1100, 200),
            new Coins(1300, 240),
            new Coins(1500, 230),
            new Coins(1700, 220),
            new Coins(1900, 210),
            new Coins(2100, 200),
            new Coins(2300, 190)
        ],
        [
            new Bottle(1400),
            new Bottle(1600),
            new Bottle(1600),
            new Bottle(1200),
            new Bottle(1900),
            new Bottle(2200),
            new Bottle(2500),
            new Bottle(2800),
            new Bottle(3700),
            new Bottle(3800)
        ],
        [
            new SmallChicken(1000),
            new SmallChicken(1500),
            new SmallChicken(2000),
            new SmallChicken(2500),
            
        ],
        [
            new Endboss()
        ]
    );

}