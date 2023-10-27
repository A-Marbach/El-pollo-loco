class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    canDrawFrame = false;


    //loadImage from all Classes
    loadImage(path) {
        this.img = new Image(path);
        this.img.src = path;
    }

    //loadImage from all Classes
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    //draws all images in the canvas
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //draws outlines of all selected images
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