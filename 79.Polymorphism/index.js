function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}

Shape.prototype.common = function(){
    console.log('I am Common Method from base Shape')
}

function Square(width, color){
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function(){
    console.log('Draw is a property member')
}
//method overriding
Square.prototype.common = function(){
    // Shape.prototype.common.call(this)
    console.log('Common method has been override in Square')
}
var sqr = new Square(44,'Pink')
function Circle(radius, color){
    Shape.call(this,color)
    this.radius = radius
}
extend(Shape, Circle)

//method overriding
Circle.prototype.common = function(){
    //Shape.prototype.common.call(this)
    console.log('Common method has been override in Circle')
}

var c = new Circle(5, 'Black')
var s = new Shape("purple")

//polymorphism
console.log(s.common())
console.log(sqr.common())
console.log(c.common())

console.log("----Just calling common method----")
//Array
var shapes = [s,c,sqr]

for(var m of shapes){
    m.common()
}
//kono ekta jinis kotha teke asche tar corse check
console.log(c instanceof Circle)
console.log(c instanceof Shape)//True because Circle inherit Shape
console.log(c instanceof Square)
console.log(sqr instanceof Square)
console.log(sqr instanceof Shape)