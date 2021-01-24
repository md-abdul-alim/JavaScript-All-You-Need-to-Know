function Shape(){

}

// Square.prototype = {
//     test: function(){

//     }
// }
// Evabe kokono prototype declar korbona. tahole sob reset hoa jabe.tai nicher moto kore prototype add korbo main prototype er sate
Shape.prototype.common = function(){
    console.log('I am Common Method')
}

function Square(width){
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square // prototype reset korle sate sate constructor reset kore dibo

Square.prototype.draw = function(){
        console.log('Draw is a property member')
    }

//Square object
var shape = new Shape()
var sqr = new Square(44) //var s1 = new Square.prototype.constructor(99)
var s1 = new Square.prototype.constructor(99)
console.log(shape)
console.log(sqr)
console.log(s1)
console.log(sqr.common())
