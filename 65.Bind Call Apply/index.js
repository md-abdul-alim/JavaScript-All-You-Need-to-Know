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
//step 1
function myFunc(){
    console.log(this)
    console.log(this.a + this.b)
}

//myFunc.apply({})
//myFunc()
myFunc.call({a:44,b:55})
myFunc.apply({a:444,b:555})

//step 2
function myFunc(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({a:44,b:55}, 10 ,5 )
myFunc.apply({a:444,b:555},[10,5])
var testBind1 = myFunc.bind({a:11, b:22}, 3, 4)
testBind1()
var testBind2 = myFunc.bind({a:11, b:22})
testBind2(3, 4)
