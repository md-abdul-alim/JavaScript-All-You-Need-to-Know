function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

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

extend(Shape, Square)

Square.prototype.draw = function(){
    console.log('Draw is a property member')
}

var sqr = new Square(44,'Pink')
console.log(sqr)

function Circle(radius, color){
    Shape.call(this,color)
    this.radius = radius
}
extend(Shape, Circle)

//method overriding
Circle.prototype.common = function(){
    Shape.prototype.common.call(this)
    console.log('Common method has been override')
}

var c = new Circle(5, 'Black')
//calling overriding method
console.log(c.common())
//calling base method
console.log(sqr.common())