var a = 'abc'

if(true){
    if(true){
        var b= 'I am B'
    }
}
console.log(b)

function x(){
    function y(){
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()