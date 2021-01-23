function Square(width){
    //ekane constructor jegula declare kora hobe hobe egula 
    //instance member
    this.width = width
    // this.draw = function(){
    //     console.log('Draw')
    // }
}

//prototype create korbo jate duplicate instance create na hoy bar bar object create korle
Square.prototype = {
    //prototype member
    draw: function(){
        console.log('Draw')
    },
    toString: function(){
        return "My width is = " + this.width
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(sqr1.draw())
console.log(sqr2.toString())