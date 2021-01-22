 var createRect = function(width, height){
    return {
        width: width,
        height: height,
    
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
 }

 var rect1 = createRect(22,33)
 rect1.draw()

 var rect2 = createRect(55,66)
 rect2.draw()
