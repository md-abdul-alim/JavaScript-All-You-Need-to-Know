//Closure is when a function is able to remember and access it's lexical scope even
// when that function executing outside it's lexical scope


//Example 1
function test(){
    var msg = 'this is a closure'
    function sayMsg(){
        console.log(msg)
    }
    sayMsg()
}
test()
console.log("------------------")
//Example 2
var b = 10

function a(){
    var x = 5
    return function(){
        console.log(x)
    }
}
var abc = a()
console.dir(abc)
abc() //calling outside it's scope
console.log("------------------")
//Example 3
//step 1
// for(var m = 1; m<=5;m++){
//     //here answer will be 6 five times. because loop is running first.
//     //than after completing loop 5 times when m=6 and the loop is end.
//     //than the setTimeout function is calling
//     setTimeout(function(){
//         console.log(m)
//     },1000*m)
// }
//step 2
//to solve this last timeout calling
for(var m = 1; m<=5;m++){
    (function(n){
        setTimeout(function(){
            console.log(n)
        },1000*n)
    })(m)
}