var arr = [1,2,3,4,5,6]

console.log('---------Join Method----------')
console.log(arr)
console.log(arr.join())
console.log(arr.join(' '))
console.log(arr.join('..'))
console.log(arr.join('|'))

console.log('---------Fill Method----------')
var brr = [7,8,9]
// brr.fill(0)
brr.fill(true)
console.log(brr)

console.log('---------Concat Method----------')
crr = arr.concat(brr)
console.log(crr)

console.log('---------isArray(array test) Method----------')
console.log(Array.isArray(crr))

console.log('---------array to array Method----------')
//Array is mutable object
var drr = Array.from(arr)
console.log(drr)

//OR
a = [1,2]
var b= a //ekane a er reference direct b te raksi.tai b change korle a change hoa jasse.cause array mutable
b[0] = 5
console.log(a)
console.log(b)
console.log("------Array clone create korbo-----")
var a=[1,2]
var b = Array.from(a)
b[0]=5
console.log(a)
console.log(b)