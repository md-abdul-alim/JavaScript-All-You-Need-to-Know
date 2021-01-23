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

//this will check whether a property is really it's own property or not
console.log(sqr1.hasOwnProperty('width'))
console.log(sqr1.hasOwnProperty('getWidth'))
console.log(sqr1.hasOwnProperty('draw'))

//this will return only instance member
console.log(Object.keys(sqr1))

//This will return prototype and instance all members
for(var m in sqr1){
    console.log(m)
}