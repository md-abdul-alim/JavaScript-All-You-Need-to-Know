function Square(width){
    //ekane constructor jegula declare kora hobe hobe egula 
    //instance member
    this.width = width
    this.getWidth = function(){
        console.log('Width as a instance member: ' + this.width)
        this.draw()
    }
    // this.draw = function(){
    //     console.log('Draw')
    // }
}

//prototype create korbo jate duplicate instance create na hoy bar bar object create korle
Square.prototype = {
    //prototype member
    draw: function(){
        //this.getWidth()
        console.log('Draw is a property member')
    },
    toString: function(){
        return "Width as a prototype member: " + this.width
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(sqr1.draw())
console.log(sqr2.toString())
console.log(sqr1.getWidth())

//Note: instance member can access the prototype member.
//As well as prototype member can also access the instance member.