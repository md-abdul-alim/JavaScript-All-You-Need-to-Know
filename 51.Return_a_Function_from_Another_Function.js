function greet(msg){
    function greetings(name){
        return msg + ', ' + name + '!'
    }
    return greetings
}
var gm = greet('Good Morning')
var gn = greet('Hello')
//console.log(typeof gm)

var msg = gm('Milon')
console.log(msg)
console.log(gm('Shara'))

//kono ekta number ke power korar function emplementaion
/*
function base(b){
    function power(p){
        var result = 1
        for(var m=0;m<p;m++){
            result *=n
        }
        return result
    }
    return power
}*/
//OR
function base(b){
    return function(p){
        var result = 1
        for(var m=0;m<b;m++){
            result *=p
        }
        return result
    }
}
var base10 = base(10)
console.log(base10(2)) //2^10

var base5 = base(5)
console.log(base5(2)) //2^5
console.log(base5(3)) //3*5
console.log(base5(5)) //5^5 