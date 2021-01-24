function Shape(color){
    this.color = color
}

Shape.prototype.common = function(){
    console.log('I am Common Method')
}

function Square(width, color){
    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square // prototype reset korle sate sate constructor reset kore dibo

Square.prototype.draw = function(){
        console.log('Draw is a property member')
    }


var sqr = new Square(44,'Pink')
console.log(sqr)
