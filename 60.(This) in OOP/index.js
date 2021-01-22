var rect = {
    width: 100,
    height: 50,

    draw: function(){
        console.log("This is a rectangle")
        this.printProperties()
        console.log(this)
    },
    printProperties: function(){
        console.log("Width is "+ this.width)
        console.log("height is "+ this.height)
    }
}

rect.draw()

function myFunc(){
    console.log(this)
}
//this all time take value on executional phage.
//myFunc() //this will return window object
new myFunc() //Blank/ empty object create korbe


var another = {
    width: 44,
    height: 55,
    print: rect.printProperties
}
console.log(another.print())
another.print()