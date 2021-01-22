function test(){
    console.log('Something')
}
console.log(test.name, test.length)
var Rect = new Function('width', 'height', 
    `this.width = width
    this.hight = height

    this.draw = function(){
        console.log('This is a rectangle')
        this.printProperties()
        console.log(this)
    }

    this.printProperties = function(){
        console.log('Width is ' + this.width)
        console.log('Height is ' + this.height)
    }`
)

var rect1 = new Rect(4,5)
console.log(rect1)