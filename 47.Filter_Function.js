var arr = [4,5,1,7,8,9,3]
var filteredArray=arr.filter(function(value){
    // return value % 2 == 0
    // return value % 2 == 1
    return value > 4
})

console.log(filteredArray)
//generate a filter function
function myFilter(arr){
    var newArr = []
    for(var m = 0;m< arr.length; m++){
        if(arr[m] % 2 == 0){
            newArr.push(arr[m])
        }
    }

    return newArr
}
console.log(myFilter(arr))

//add callback function to generate filter function
console.log("-----Generate a filter function using callback-----")
function my_filter(arr,cb){
    var newArr = []
    for(var m = 0;m< arr.length; m++){
        if(cb(arr[m],m, arr)){
            newArr.push(arr[m])
        }
    }

    return newArr
}
console.log(my_filter(arr, function(value){
    return value % 2 == 0
}))
console.log(my_filter(arr, function(value){
    return value > 4
}))