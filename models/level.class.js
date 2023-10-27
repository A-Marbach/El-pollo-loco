class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 4400;
    coins;
    bottle;
    enemies_small;
    endboss;


    /**
     * this constructor connects the respective variables with 'this' so that you can use them everywhere
     * 
     * @param {string} enemies 
     * @param {string} clouds 
     * @param {string} backgroundObjects 
     * @param {string} coins 
     * @param {string} bottle 
     * @param {string} enemies_small 
     * @param {string} endboss 
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottle, enemies_small, endboss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
        this.enemies_small = enemies_small;
        this.endboss = endboss;
    }
}