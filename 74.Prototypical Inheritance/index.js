function Shape(){

}
Shape.prototype = {
    common: function(){
        console.log('I am Common Method')
    }
}


function Square(width){
    this.width = width
}

Square.prototype = {
    draw: function(){
        console.log('Draw is a property member')
    }
}

//Square object
var shape = new Shape() //shape -> shape -> object
var sqr = new Square(44) //sqr -> square -> object
console.log(shape)
console.log(sqr)

//but we need like this: sqr -> Square -> Shape -> Object
//we will work for this bellow

console.log('--------JavaScript Inheritance--------')

function Shape(){

}
Shape.prototype = {
    common: function(){
        console.log('I am Common Method')
    }
}


function Square(width){
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
        console.log('Draw is a property member')
    }

//Square object
var shape = new Shape() //shape -> shape -> object
var sqr = new Square(44) //sqr -> square -> object

console.log(shape)
console.log(sqr)
console.log(sqr.common())

//for circle
function Circle(){

}
Circle.prototype = Object.create(Shape.prototype)
var c = new Circle()
console.log(c)
console.log(c.common())