var rect = {
    width: 100,
    height: 50,

    draw: function(){
        console.log("This is a rectangle")
        console.log("Width is "+ this.width)
        console.log("height is "+ this.height)
    }
}

rect.draw()
rect.height = 200
rect.draw()