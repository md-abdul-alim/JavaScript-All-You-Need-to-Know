function Square(width){

    this.width = width
    this.getWidth = function(){
        console.log('Width as a instance member: ' + this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        this.getWidth()
        console.log('Draw is a property member')
    },
    toString: function(){
        return "Width as a prototype member: " + this.width
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

