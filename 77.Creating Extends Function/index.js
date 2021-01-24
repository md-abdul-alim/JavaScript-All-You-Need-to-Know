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

function Circle(radius, color){
    Shape.call(this,color)
    this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

var crl = new Circle(99,'Red')
console.log(crl)
console.log('---Removing Duplicate---')
// Remove this kind of function creating again and again

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

//common method
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

var crl = new Circle(99,'Red')
console.log(crl)