//pass by value vs pass by reference
var n = 10
function change(n){
    n = n + 100
    console.log(n)
}
//function e arguments akare kono primitive data (number, string, boolean, undefine, null)
// esob data send kori tahole function body kono vabei sei data ta change korte parena
// function er vitore just ekta clone create kore variable er.ja fole main variable ta change hoyna
change(n)
console.log(n)


//call by value vs call by reference
var obj = {
    a: 10,
    b: 20
}
//arguments akare object er copy jaina. object er ekta reference jai.je reference dia
//amra oi object er primitive data gula ke access korte pari
//javascript e object gula mutable object. kono jaiga teke object er properties change korle oi object er sob jaiga tei oi property value change hoa jai
function changeMe(obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}
changeMe(obj)
console.log(obj)