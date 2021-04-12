function createPoint(x, y){
    return {
        x: x,
        y: y,
        getX: function(){return x},
        getY: function () {return y},
        transition: function (tempX, tempY){
            this.x = x + tempX;
            this.y = y + tempY;
        },
        scale: function (K) {
            this.x = K*x;
            this.y = y*K;
        }
    }
}


let point = createPoint(4,5);
console.log(point);

console.log(point.getX());
point.transition(4,5)
console.log(point);
