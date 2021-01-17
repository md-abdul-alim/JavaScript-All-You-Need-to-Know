 var arr = [7,4,8,6,9,2,1,70,3]

 //value return
var result = arr.find(function(value){
    return value == 9
 })
 console.log(result)

 //index return
 var result = arr.findIndex(function(value){
     return value == 9
 })
console.log(result)

function myFind(arr, cb){
    for(var m = 0;m<arr.length; m++){
        if(cb(arr[m])){
            //return arr[m]
            return m
        }
    }
}

var result = myFind(arr, function(value){
    return value == 9
})
console.log(result)