//Constructor pattern e object variable capital letter dia suru hobe
//sob variable & method this dia call korte hobe

var Rectangle = function(width, height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log("This is a rectangle")
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function(){
        console.log("Width is "+ this.width)
        console.log("height is "+ this.height)
    }
 }

var rect3 = new Rectangle(55,99)
rect3.draw()

function myNew(constructor){
    var obj = {} //var obj = new Object()
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

var rect4 = myNew(Rectangle, 45,30)
rect4.draw()

//constructor property hosse kono object create korar jonno
//je function use kora hoise tar reference.
var str = new String('str')
console.log(str)