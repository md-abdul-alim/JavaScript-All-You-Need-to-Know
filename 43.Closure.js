//Closure is when a function is able to remember and access it's lexical scope even
// when that function executing outside it's lexical scope

//Example 1
var b = 10

function a(){
    var x = 5
    return function(){
        console.log(x)
    }
}
var abc = a()
console.dir(abc)

//Example 2