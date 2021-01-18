function add(a,b,c){
    return a + b + c
}
add(33,44,55)

//Create curring function
function currying(a){
    return function (b){
        return function(c){
            return a + b + c
        }
    }
}
var result = currying(5)(4)(3)

console.log(result)