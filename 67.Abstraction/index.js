
//Constructor function
var Rectangle = function(width, height){
    
    //var name = 'Milon'
    var position = {
        x: 44,
        y: -100
    }

    this.width = width
    this.height = height
    

    var printProperties = function(){
        console.log("Width is "+ this.width)
        console.log("height is "+ this.height)
    }.bind(this)

    this.draw = function(){
        console.log("This is a rectangle")
        printProperties()
        console.log('Position: X= '+ position.x + ' Y= ', +position.y)
    }
 }
 
var rect1 = new Rectangle(33,44)
//console.log(rect1.name)
rect1.draw()
