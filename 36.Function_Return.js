function addAll(){
    var sum = 0
    for (var m=0;m<arguments.length;m++){
        sum+= arguments[m]
    }
    return sum
}
var result=addAll(99,88,77)
console.log(result)

function person(name,email){
    return{
        name: name,
        email: email
    }
}

var p1 = person("MILON", 'alim@gmail.com')
console.log(p1)