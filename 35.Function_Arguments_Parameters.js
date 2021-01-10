function add(a,b){
    var result = a + b
    console.log(result)
}
add(12,33)
add(33,55)

var array1 = [1,2,3]
var array2 = [4,5,6]
var array3 = [7,8,9,10]

var sum1=0
for(var m = 0;m<array1.length;m ++)
{
    sum1 +=array1[m]
}
console.log(sum1)

var sum2=0
for(var m = 0;m<array2.length;m ++)
{
    sum2 +=array2[m]
}
console.log(sum2)


function sumOfArray(arr){
    var sum=0
    for(var m = 0;m<arr.length;m ++)
    {
        sum +=arr[m]
    }
    console.log(sum)
}
sumOfArray(array1)
sumOfArray(array2)
sumOfArray(array3)

console.log("---Using Arguments---")

function test(a,b,c){
    //console.log(arguments)//here arguments is a build in javaScripts object
    //console.log(JSON.stringify(arguments))
    console.log(arguments)
}
//test()
test(11,22,33)

function test1(a,b,c){
    for(var m=0;m<arguments.length; m++){
        console.log(arguments[m])
    }
}
test1(44,55,66)

function test2(){
    for(var m=0;m<arguments.length; m++){
        console.log(arguments[m])
    }
}
test2(77,88,99)

function addAll(){
    var sum = 0
    for (var m=0;m<arguments.length;m++){
        sum+= arguments[m]
    }
    console.log(sum)
}
addAll(99,88,77)
addAll(22,33,55,77)