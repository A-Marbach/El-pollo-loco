class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    canDrawFrame = false;


    /**
     * this function loadImage from all Classes
     * 
     * @param {string} path the path of img
     */
    loadImage(path) {
        this.img = new Image(path);
        this.img.src = path;
    }

    /**
     * this function gets the image from the respective array
     * 
     * @param {array} arr this is array where the image should be loaded after
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * this function draws all images in the canvas
     * 
     * @param {string} ctx context for the canvas is linked with him
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * this function draws outlines of all selected images
     * 
     * @param {string} ctx context for the canvas is linked with him
     */
    drawFrame(ctx) {
        if (this.canDrawFrame) {
            if (this instanceof Character || this instanceof Coins ||
                this instanceof Bottle) {
                ctx.beginPath();
                ctx.lineWidth = '5';
                ctx.strokeStyle = 'red';
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.stroke();
            }

            if (this instanceof Character || this instanceof Coins || this instanceof Bottle) {
                ctx.beginPath();
                ctx.lineWidth = '2';
                ctx.strokeStyle = 'blue';
                ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width + this.offset.right, this.height + this.offset.bottom);
                ctx.stroke();
            }
        }
    }
}