//Pure function
function sqr(n){
    return n*n
}
console.log(sqr(8))

//Not pure function
var n=10
function change(){
    n=100
}
change()
console.log(n)

var point={
    x: 34,
    y: 23
}
function printPoint(point){
    point.x = 100,
    point.y = 200
    console.log(point)
}
printPoint(point)
//change the main value
console.log(point)