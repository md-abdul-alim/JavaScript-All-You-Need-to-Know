var arr = [1,2,3,4,5]

var sum = 0
arr.forEach(function (value, index, arr){
    console.log(value, index, arr)
    sum += value
})
console.log("Summation: ",sum)

function for_each(arr,cb){
    for(var m = 0 ;m< arr.length; m++){
        cb(arr[m], m, arr)
    }
}

var sum = 0
for_each(arr, function(value,index, arr){
    console.log(value, index, arr)
    sum +=value
})
console.log("Summation: ",sum)

for_each(arr, function(value,index, arr){
    arr[index] = value + 5
})

console.log(arr)