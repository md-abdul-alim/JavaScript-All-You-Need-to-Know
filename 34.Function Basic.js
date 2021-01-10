var date =new Date()

//build in function
console.log(date.getFullYear())
console.log(date.getUTCFullYear())
console.log(date.getTimezoneOffset())

function functionName() {
    console.log("This is a function.")
}
function add(){
    var a = 10
    var b = 20
    console.log("Addition: ",a + b)
}
function sub(){
    var a = 10
    var b = 20
    console.log("Subtraction: ",a - b)
}

functionName()
add()
sub()

for(var m = 0; m < 3; m++){
    functionName()
}