var str = "Some String"

console.log(str.charAt(3))
var str2= str.charAt(13)
console.log(typeof str2)

var length = 0

while(true){
    if (str.charAt(length)==''){
        break
    }else{
        length++
    }
}
console.log(length)
//shortcut
console.log(str.length)
console.log('dfsfsfsdfdsfsdrew'.length)