var a = 11

function A(){
    var b =23
    function B(){
        var c = 55
        console.log(c)
    }

    function C(){
        var d = 88
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()
}
function D(n){
    return n + a
}