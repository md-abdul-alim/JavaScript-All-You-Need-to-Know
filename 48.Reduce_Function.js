var arr = [6,2,3,4,5]

var sum = arr.reduce(function(prev, curr){
    return prev + curr
},100)

console.log(sum)

var max = arr.reduce(function(prev, curr){
    return Math.max(prev,curr)
},0)
console.log(max)

console.log("----Generate Reduce Function----")

function myReduce(arr, cb, acc){
    for(var m = 0;m< arr.length; m++){
        var acc = cb(acc, arr[m])
    }
    return acc
}

var sum = myReduce(arr, function(prev, curr){
    return prev + curr
},0)
console.log("Summation: ",sum)

var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
},0)
console.log("Maximum: ",max)

var min = myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
},arr[0])
console.log("Minimum: ",min)