var arr = [1,2,3]

var sqrArr = arr.map(function(value){
    //return Math.random()*100
    return value * value
})

console.log(arr)
console.log(sqrArr)


//Map function generate

function myMap(arr){
    var newArr = []
    for(var m = 0;m<arr.length; m++){
        var temp = arr[m] * arr[m]
        newArr.push(temp)
    }
    return newArr
}

console.log(myMap(arr))
// add callback function
function my_Map(arr,cb){
    var newArr = []
    for(var m = 0;m<arr.length; m++){
        var temp = cb(arr[m], m, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = my_Map(arr,function(value){
    return value * value * value
})

var tenMulti = my_Map(arr,function(value){
    return value * 10
})

console.log(qb)
console.log(tenMulti)